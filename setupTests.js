/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import * as emotion from '@emotion/core';
import { createSerializer } from 'jest-emotion';
import 'jest-prop-type-error';

expect.addSnapshotSerializer(createSerializer(emotion));
