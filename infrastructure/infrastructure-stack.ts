import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as path from 'path';
import { 
  Distribution,
  OriginAccessIdentity,
} from 'aws-cdk-lib/aws-cloudfront';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda'
import { S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Size } from 'aws-cdk-lib';
import { ApiKeySourceType, Cors, RestApi } from 'aws-cdk-lib/aws-apigateway'

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucket = new s3.Bucket(this, 'NeromovePageBucket', {
      bucketName:  'neromove-page',
      publicReadAccess: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: true,
    });
    
    new s3Deploy.BucketDeployment(this, 'NeromovePageBucketDeployment', {
      sources: [
        s3Deploy.Source.asset(path.join(__dirname, '../build')),
      ],
      destinationBucket: bucket,
      memoryLimit: 2048,
      ephemeralStorageSize: Size.gibibytes(2),
    });
    
    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    bucket.grantRead(originAccessIdentity);

    new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessControl(bucket)
      }
    });
    
    const sendContactEmail = new Function(this, 'contact-email', {
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset('lambda'),
      handler: 'send-contact-email.send',
    });

    const api = new RestApi(this, 'EmailApi', {
      restApiName: 'EmailAPi',
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
      },
      apiKeySourceType: ApiKeySourceType.HEADER,
    });

    const apiKey = new apiKey(this, "EmailApiKey");

        
    const helloResource = api.root.addResource('contact');
    helloResource.addMethod('GET',);

  }
}
 