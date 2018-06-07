import React from 'react';

const CategoryForm = props => {
  const { categories } = props.categories;
  return (
    <form>
      <label>Existing Categories</label>
      <select onChange={() => console.log('select changed')}>
        {categories.map(category => {
          return (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <button type="submit" className="btn btn-success">
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
