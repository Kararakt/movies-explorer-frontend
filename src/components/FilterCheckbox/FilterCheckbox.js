import './FilterCheckbox.css';

export const FilterCheckbox = ({ name, checkbox, handleCheckbox }) => {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input
          type="checkbox"
          name="checkbox"
          checked={checkbox}
          onChange={handleCheckbox}
          className="filter-checkbox__checkbox"
        />
        <span className="filter-checkbox__name">{name}</span>
      </label>
    </div>
  );
};
