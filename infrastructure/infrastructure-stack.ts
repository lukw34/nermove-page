import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as path from 'path';
import { 
  AllowedMethods,
  Distribution,
  OriginAccessIdentity,
  OriginProtocolPolicy, 
} from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin, S3BucketOrigin, S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';

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
      destinationBucket: bucket
    });
    
    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    bucket.grantRead(originAccessIdentity);

    new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessControl(bucket)
      }
    });
    
  }
}
