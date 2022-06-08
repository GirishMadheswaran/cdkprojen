import { expect, haveResource, countResources } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import { SentiaUser } from '../src';

describe('User', () => {
  it('creates the user', () => {
    const stack = new Stack();
    new SentiaUser(stack, 'User', {
      userName: 'checkuser',
    });
    expect(stack).to(haveResource('AWS::IAM::User', {
      userName: 'checkuser',
    }));
  });
});