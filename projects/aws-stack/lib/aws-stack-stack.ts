import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";

class AwsStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'bucket-react');

    new s3.Bucket(this, 'bucket-react-gatsby');
  }
}

export default AwsStackStack;
