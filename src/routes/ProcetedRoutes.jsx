import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import AuthContext from "@/context/AuthContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProcetedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (user) return children;

  return <Navigate state={location.pathname} to="/login" />;
};

ProcetedRoutes.propTypes = {
  children: PropTypes.node,
};

export default ProcetedRoutes;
