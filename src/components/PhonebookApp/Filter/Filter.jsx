const Filter = ({ filterChange }) => {
  return (
    <div>
      <input onChange={filterChange} type="text" />
    </div>
  );
};

export default Filter;
