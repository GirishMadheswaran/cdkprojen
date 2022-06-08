const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "GirishMadheswaran",
  authorAddress: "girishgv997@gmail.com",
  authorName: "Girish",
  cdkVersion: "2.1.0",
  assertion: true,
  deps: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/core'
  ],
  release: true,
  publishToPypi: {
    distName: 'cdk-projen',
    module: 'cdk_projen'
  },
  defaultReleaseBranch: "main",
  description: "AWS IAM User constructor with keys attached",
  name: "cdkprojen",
  repositoryUrl: "https://github.com/GirishMadheswaran/cdkprojen.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();