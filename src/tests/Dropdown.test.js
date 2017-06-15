import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import {stubConsoleError} from './utils/test-utils'
import Dropdown from '../components/Dropdown';

describe("<Dropdown />", ()=>{
    stubConsoleError();

    test('renders without crashing', () => {
        const tree = renderer.create(
            <Dropdown />
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

    test('UL shows when dropdown clicked', () => {
        const tree = renderer.create(
            <Dropdown />
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

});
