#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../infrastructure/infrastructure-stack';

const app = new cdk.App();
new InfrastructureStack(app, 'InfrastructureStack', {});