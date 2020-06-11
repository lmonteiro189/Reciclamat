import React, { useState } from 'react';
import './style.scss';
import glass from './../../images/glass.svg';
import metal from './../../images/aluminio.svg';
import wood from './../../images/madeira.svg';
import paper from './../../images/papel.svg';
import plastic from './../../images/plastico.svg';
import fabric from './../../images/pano.svg';

const PostMaterials = (props) => {
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [materials] = useState([
    { material: 'glass', image: glass },
    { material: 'paper', image: paper },
    { material: 'plastic', image: plastic },
    { material: 'metal', image: metal },
    { material: 'wood', image: wood },
    { material: 'fabric', image: fabric }
  ]);

  function handleSelectItem(material) {
    if (props.multiple) {
      const alreadySelected = selectedMaterials.findIndex(
        (item) => item === material
      );
      if (alreadySelected >= 0) {
        const filteredItems = selectedMaterials.filter(
          (item) => item !== material
        );
        props.handleMaterials(filteredItems);
        setSelectedMaterials(filteredItems);
      } else {
        props.handleMaterials([...selectedMaterials, material]);
        setSelectedMaterials([...selectedMaterials, material]);
      }
    } else {
      if (selectedMaterials[0] === material) {
        props.handleMaterials(undefined);
        setSelectedMaterials([]);
      } else {
        props.handleMaterials(material);
        setSelectedMaterials([material]);
      }
    }
  }

  return (
    <div className="materials-container">
      <section className="materials-row">
        {materials.map((material) => {
          return (
            <figure
              className={
                selectedMaterials.includes(material.material)
                  ? 'box selected'
                  : 'box'
              }
              onClick={() => handleSelectItem(material.material)}
            >
              <img
                className="material-img"
                src={material.image}
                alt="plastic"
              />
              <figcaption className="material-name">
                {material.material}
              </figcaption>
            </figure>
          );
        })}
      </section>
    </div>
  );
};
export default PostMaterials;
