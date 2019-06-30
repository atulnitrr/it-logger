import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTech();
    //eslint-disable-next-line
  }, []);

  const getTech = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();
    setLoading(false);
    setTechs(data);
  };
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician list</h4>
        <ul className="collection">
          {!loading &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
