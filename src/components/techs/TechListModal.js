import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician list</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});
export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
