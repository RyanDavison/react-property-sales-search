import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import {stubConsoleError} from './utils/test-utils';
import Dropdown from '../components/Dropdown';

describe("<Dropdown />", ()=>{
    stubConsoleError();

    const testContent = [
         {type: 'heading', value: 'Improved Sales', label: 'Improved Sales'},
         {type: 'item', value: 'Agricultural', label: 'Agricultural' },
         {type: 'item', value: 'Commercial/Industrial', label: 'Commercial/Industrial' },
         {type: 'item', value: 'Agricultural Vacant', label: 'Agricultural Vacant' },
    ]

    test('renders without crashing', () => {
        const tree = renderer.create(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}/>
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

    test('UL shows when dropdown clicked', () => {
        const wrapper = mount(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}
            />
      )

      wrapper.instance().showHide({target:{classname: 'header'}});
    //   wrapper.instance().changeMax({target:{value: 5000}});
    //   expect(wrapper.nodes[0].state.minValue).toEqual(500);
      expect(wrapper.nodes[0].state.isShown).toEqual(5000);
    });

});
