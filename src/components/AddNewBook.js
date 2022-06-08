import React from 'react';

const AddNewBook = () => (
  <div>
    <h2>Add New Book</h2>
    <input type="text" placeholder="Book title" />
    <form action="#">
      <select name="books" id="books">
        <option value="">Catefory</option>
        <option value="fiction">Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>

      </select>

      <button type="submit"> Add Book</button>
    </form>
  </div>
);

export default AddNewBook;
