import React from 'react';

interface Props {
  name: string,
  image: string,
  count: number,
  onNameClick: React.MouseEventHandler,
  onDelete: React.MouseEventHandler
}

const Ingredient: React.FC<Props> = ({name, count,image, onNameClick, onDelete}) => {
  return (
    <div className="row mb-2 justify-content-between">
      <div className="col-2">
        <img src={image} className="border-1 border border-dark" width="50" height="50"/>
      </div>
      <div className="col-2 mt-3" onClick={onNameClick}>{name}</div>
      <div className="col-2 mt-3">x{count}</div>
      <div className="col-2 mt-3">
        <button onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash"
               viewBox="0 0 16 16">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg></button>
      </div>
    </div>
  );
};

export default Ingredient;