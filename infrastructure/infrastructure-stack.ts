import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as path from 'path';
import { 
  Distribution,
  OriginAccessIdentity,
  AllowedMethods,
  CachePolicy,
  ViewerProtocolPolicy,
  OriginProtocolPolicy,
  OriginRequestPolicy
} from 'aws-cdk-lib/aws-cloudfront';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { HttpOrigin, S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { CfnOutput, Size } from 'aws-cdk-lib';
import { ApiKey, ApiKeySourceType, Cors, LambdaIntegration, RestApi, UsagePlan } from 'aws-cdk-lib/aws-apigateway';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { EmailSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';

const SSL_CERTIFICATE_ARN =  'arn:aws:acm:us-east-1:682537233573:certificate/bc91a90f-0523-402c-afb1-16425049a93c';
const DOMAIN_NAME = 'neromove.eu';


export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucket = new s3.Bucket(this, 'NeromovePageBucket', {
      bucketName: DOMAIN_NAME,
      publicReadAccess: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: true,
    });

    const certificate = Certificate.fromCertificateArn(this, 'Certificate', SSL_CERTIFICATE_ARN);

    const email = 'lukw34@gmail.com';
    const subject = 'Formularz Kontaktowy';
    

    const topic = new Topic(this, 'NeromoveContact', {
      displayName: subject
    });

    topic.addSubscription(new EmailSubscription(email));

    const lambdaSNSPolicyStatement = new PolicyStatement({
      resources: [topic.topicArn],
      actions: ['sns:Publish'] 
    });
    
    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    bucket.grantRead(originAccessIdentity);

    
    const sendContactEmail = new Function(this, 'contact-email', {
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset('lambda'),
      handler: 'send-contact-email.send',
      environment: {
        Subject: subject,
        ContactUsSNSTopic: topic.topicArn
      },
      initialPolicy: [
        lambdaSNSPolicyStatement
      ]
    });

    const apiKey = new ApiKey(this, 'NeromoveApiKey');

    const api = new RestApi(this, 'EmailApi', {
      restApiName: 'EmailApi',
      deployOptions: {
        stageName: 'prod',
      },
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
      },
      apiKeySourceType: ApiKeySourceType.HEADER,
    });

    const usagePlan = new UsagePlan(this, 'UsagePlan', {
      name: 'Usage Plan',
      apiStages: [
        {
          api,
          stage: api.deploymentStage
        },
      ],
    });

    usagePlan.addApiKey(apiKey);

    const contactResource = api.root.addResource('api').addResource('contact');
    contactResource.addMethod('GET', new LambdaIntegration(sendContactEmail));
    contactResource.addMethod('POST', new LambdaIntegration(sendContactEmail));
    const apiOriginPath = `/${api.deploymentStage.stageName}`;
    const apiOriginName = `${api.restApiId}.execute-api.${this.region}.amazonaws.com`;
    const distribution = new Distribution(this, 'Distribution', {
      domainNames: [DOMAIN_NAME],
      certificate: certificate,
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessControl(bucket),
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
        viewerProtocolPolicy: ViewerProtocolPolicy.ALLOW_ALL,
      },
    
      additionalBehaviors: {
        'api/*': {
          origin: new HttpOrigin(apiOriginName, {
            originId: apiOriginName,
            protocolPolicy: OriginProtocolPolicy.HTTPS_ONLY,
            httpPort: 80,
            httpsPort: 443,
            originPath: apiOriginPath
          }),
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          cachePolicy: CachePolicy.CACHING_DISABLED,
          allowedMethods: AllowedMethods.ALLOW_ALL,
          originRequestPolicy: OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        },
      },
    });

    new s3Deploy.BucketDeployment(this, 'NeromovePageBucketDeployment', {
      sources: [
        s3Deploy.Source.asset(path.join(__dirname, '../build')),
      ],
      destinationBucket: bucket,
      memoryLimit: 2048,
      ephemeralStorageSize: Size.gibibytes(2),
      distribution,
    });
  }
}
 