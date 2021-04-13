import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as s3Deployment from '@aws-cdk/aws-s3-deployment'

class AwsStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const bucketReact = new s3.Bucket(this, 'bucket-react', {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
    })

    const bucketReactGatsby = new s3.Bucket(this, 'bucket-react-gatsby', {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
    })

    new s3Deployment.BucketDeployment(this, 'deploy-bucket-react', {
      sources: [s3Deployment.Source.asset('../react/build')],
      destinationBucket: bucketReact,
    })

    new s3Deployment.BucketDeployment(this, 'deploy-bucket-react-gatsby', {
      sources: [s3Deployment.Source.asset('../react-gatsby/public')],
      destinationBucket: bucketReactGatsby,
    })
  }
}

export default AwsStackStack
