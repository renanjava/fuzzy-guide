import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { ClassValidatorFields } from '../../class-validator-fields'

class StubRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  exampleStringField: string

  @IsNumber()
  @IsNotEmpty()
  exampleNumberField: string

  constructor(data: any) {
    Object.assign(this, data)
  }
}

class StubClassValidatorFields extends ClassValidatorFields<StubRules> {
  validate(data: any): boolean {
    return super.validate(new StubRules(data))
  }
}

describe('ClassValidatorFields integration tests', () => {
  it('should validate with errors', () => {
    const validator = new StubClassValidatorFields()
    expect(validator.validate(null)).toBeFalsy()
    expect(validator.errors).toStrictEqual({
      exampleStringField: [
        'exampleStringField should not be empty',
        'exampleStringField must be a string',
        'exampleStringField must be shorter than or equal to 255 characters',
      ],
      exampleNumberField: [
        'exampleNumberField should not be empty',
        'exampleNumberField must be a number conforming to the specified constraints',
      ],
    })
  })

  it('should validate without errors', () => {
    const validator = new StubClassValidatorFields()
    expect(
      validator.validate({
        exampleStringField: 'exampleStringField',
        exampleNumberField: 0,
      }),
    ).toBeTruthy()
    expect(validator.validatedData).toStrictEqual(
      new StubRules({
        exampleStringField: 'exampleStringField',
        exampleNumberField: 0,
      }),
    )
  })
})
