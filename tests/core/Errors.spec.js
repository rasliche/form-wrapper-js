import {Errors} from "../../src/core/Errors";

describe('Errors.js', () => {

  
  let errorsData = {
    name: [
      'Error1',
      'Error2',
    ],
    email: [
      'Error1'
    ]
  };


  it('should returns all the errors array', () => {
    let errors = new Errors(errorsData)

    expect(errors.all()).toEqual(errorsData)
  });


  it('should record the errors', () => {
    let errors = new Errors()

    errors.record(errorsData)

    expect(errors.$errors).toEqual(errorsData)
  });


  it('should get the errors array of specific key or default value', () => {
    let errors = new Errors(errorsData)

    errors.get('name')

    expect(errors.get('name')).toEqual(errorsData.name)
    expect(errors.get('other', null)).toEqual(null)
    expect(errors.get('other', [])).toEqual([])
  });

  it('should delete a key from the errors object', () => {
    let errors = new Errors(errorsData)

    errors.delete('name')

    expect(errors.all()).not.toHaveProperty('name')
  });

  
  it('should check if there is a key inside the errors array', () => {
    let errors = new Errors(errorsData)

    expect(errors.has('name')).toBeTruthy()
    expect(errors.has('other')).toBeFalsy()
  });

  
  it('should check if there any error in errors array', () => {
    let errors = new Errors()

    expect(errors.any()).toBeFalsy()

    errors.record(errorsData)

    expect(errors.any()).toBeTruthy()
  });


  it('should clear all the errors array', () => {
    let errors = new Errors(errorsData)

    errors.clear()

    expect(errors.all()).toEqual({})
  });

})