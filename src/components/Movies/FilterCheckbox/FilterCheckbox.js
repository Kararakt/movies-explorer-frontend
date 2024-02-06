import './FilterCheckbox.css';

export const FilterCheckbox = ({ name }) => {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input
          type="checkbox"
          name="checkbox"
          className="filter-checkbox__checkbox"
        />
        <span className="filter-checkbox__name">{name}</span>
      </label>
    </div>
  );
};
