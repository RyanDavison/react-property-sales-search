import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import {stubConsoleError} from './utils/test-utils'
import Datepickers from '../components/Datepickers';

describe("<Datepickers />", ()=>{
    stubConsoleError();

    test('renders without crashing', () => {
        const tree = renderer.create(
            <Datepickers
                time={1}
                units='month'
            />
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });
});
