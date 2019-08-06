import React from 'react';
import { Form, Input, Select } from 'unform';
export default function StripeForm(props) {
  const initialData = props.details;
  const alignOptions = [
    {id: 'left', title: 'left', name: 'left'},
    {id: 'center', title: 'center', name: 'center'},
    {id: 'right', title: 'right', name: 'right'}
  ];
  const verticalAlignOptions = [
    {id: 'middle', title: 'middle', name: 'middle'},
    {id: 'top', title: 'top', name: 'top'}
  ];
  const imageFormatOptions = [
    {id: 'GIF', title: 'GIF', name: 'GIF'},
    {id: 'PNG', title: 'PNG', name: 'PNG'}
  ];
  const ratingsOptions = [
    {id: 'G', title: 'G', name: 'G'},
    {id: 'PG', title: 'PG', name: 'PG'},
    {id: 'PG13', title: 'PG13', name: 'PG13'}
  ];
  return (
      <Form id="stripe-form" className="form" initialData={initialData}>
        <div className="form-group form-group-top">
          <label htmlFor="stripeWidth">
            Width:
          <Input name="stripeWidth" className="form-control" type="number" onChange={props.handleChange} />
          </label>
          <label htmlFor="columns">
            # of Columns:
          <Input name="columns" className="form-control" type="number" onChange={props.handleChange} />
          </label>
          <label htmlFor="rows">
            # of Rows:
          <Input name="rows" className="form-control" type="number" onChange={props.handleChange} />
          </label>
        </div>
        <hr/>
        <div className="form-group form-group-panels">
          <label htmlFor="fontSize">
            Font Size:
          <Input name="fontSize" className="form-control" type="number" onChange={props.handleChange} />
          </label>
          <label htmlFor="fontName">
            Font Name:
          <Input name="fontName" className="form-control" type="number" onChange={props.handleChange} />
          </label>
          <label htmlFor="fontColor">
            Font Color:
          <Input name="fontColor" className="form-control" type="number" onChange={props.handleChange} />
          </label>
          <label htmlFor="titleAlign">
            Title Align:
            <Select name="titleAlign" className="form-control" options={alignOptions} />
          </label>
        </div>
        <hr/>
        <div className="form-group form-group-panels">
          <label htmlFor="stripeItemWidth">
            Stripe Item Width:
          <Input name="stripeItemWidth" className="form-control" type="number" onChange={props.handleChange} />
          </label>
          <label htmlFor="stripeItemHeight">
            Stripe Item Height:
          <Input name="stripeItemHeight" className="form-control" type="number" onChange={props.handleChange} />
          </label>
          <label htmlFor="backgroundColor">
            BG Color:
          <Input name="backgroundColor" className="form-control" type="text" onChange={props.handleChange} />
          </label>
        </div>
        <hr/>
        <button className="btn btn-primary responsive-btn">Responsive</button>
        <hr/>
        <div className="form-group form-group-panels">
          <h4>Production Config</h4>
          <label htmlFor="stripeID">
            ID:
          <Input name="stripeID" className="form-control" type="number" placeholder="Stripe ID" onChange={props.handleChange} />
          </label>
          <label htmlFor="containerID">
            Container ID:
          <Input name="containerID" className="form-control" type="number" placeholder="Container ID" onChange={props.handleChange} />
          </label>
          <label htmlFor="stripeName">
            Stripe Name:
          <Input name="stripeName" className="form-control" type="text" size="50" onChange={props.handleChange} />
          </label>
          <label htmlFor="extraSpace">
            Extra Title Space:
          <Input name="extraSpace" className="form-control" type="number" placeholder="Extra Title Space" onChange={props.handleChange} />
          </label>
          <label htmlFor="titleVerticalAlign">
            Vertical Title Align:
            <Select name="titleVerticalAlign" className="form-control" options={verticalAlignOptions} />
          </label>
        </div>
        <hr/>
        <button className="btn btn-primary responsive-btn">Add Title Underline</button>
        <hr/>
        <div className="form-group">
        <label htmlFor="imageFormat">
            Image Format:
            <Select name="imageFormat" className="form-control" options={imageFormatOptions} />
          </label>
          <label htmlFor="contentRating">
            Content Rating:
            <Select name="contentRating" className="form-control" options={ratingsOptions} />
          </label>
          {/* Needs to be wired to esp list and changed to Select component.  Options object will be filled by ESP data */}
          <label htmlFor="ESP">
            ESP:
          <Input name="ESP" className="form-control" type="text" size="50" onChange={props.handleChange} />
          </label>
          <label htmlFor="domain">
            Domain:
          <Input name="domain" className="form-control" type="text" size="20" onChange={props.handleChange} />
          </label>
        </div>

      </Form>
  )
}
