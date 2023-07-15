import { Field, FieldArray, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';
import Counter from 'components/Counter/Counter';
import sprite from '../../images/AddRecipePage/sprite.svg';
// import ReactSelect from 'react-select';
import {
  Container,
  Title,
  StyledSelect,
  Wrap,
  Button,
  SVG,
} from './RecipeIngredientsFields.styled';

const RecipeIngredientsFields = () => {

  const ingredientsList = useSelector(selectIngredientsList);

  const nameIngredients = ingredientsList.map(el => ({
    value: el._id,
    label: el.name,
  }));

  return (
    <Container>
      <Title>Ingredients</Title>

      <FieldArray validateOnChange name="ingredients">
        {fieldArrayProps => {
          const { push, pop, remove, form } = fieldArrayProps;

          const { values, setFieldValue } = form;
          const { ingredients } = values;

          const handleIngredientChange = (index, selectedOption) => {
            const newIngredients = [...ingredients];
            newIngredients[index].id = selectedOption.value;
            
            setFieldValue('ingredients', newIngredients);
          };

          const handleCountChange = (index, value) => {
            const newIngredients = [...ingredients];
            newIngredients[index].measure = value;
            setFieldValue('ingredients', newIngredients);
          };

    

          return (
            <div>
              <Counter pop={pop} push={push} ingredients={ingredients} />
              {ingredients.map((ingredient, index) => (
                <Wrap key={index}>
                  <StyledSelect
                    classNamePrefix="custom-select"
                    name={`ingredients[${index}].id`}
                    options={nameIngredients}
                    onChange={selectedOption =>
                      handleIngredientChange(index, selectedOption)
                    }
          
                  ></StyledSelect>
                    <ErrorMessage
                      name={`ingredients[${index}].id`}
                      component="div"
                      className="error-message"
                    />
                  
                  <Field
                    name={`ingredients[${index}].measure`}
                    type="text"
                    value={ingredients[index].measure || ''}
                    onChange={event => {
                      console.log()
                      handleCountChange(index, event.target.value);
                    }}
                  ></Field>
                  <ErrorMessage
                    name={`ingredients[${index}].measure`}
                    component="div"
                    className="error-message"
                  /> 
                  <Button
                    type="button"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <SVG width={18} height={18}>
                      <use href={`${sprite}#delete-button`}></use>
                    </SVG>
                  </Button>
                </Wrap>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </Container>
  );
};

export default RecipeIngredientsFields;
