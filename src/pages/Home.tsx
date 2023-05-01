import { Box, IconButton} from '@mui/material';
import { useContext } from 'react';
import InputBase from '@mui/material';

type callback = (b:boolean) => boolean

interface Props {
  onSignUp: (cb:callback) => void;
  onSignIN: (cb:callback) => void;
}
export const Home = ({ onSignUp, onSignIN }: Props) => {
  return (
    <>
      {/* <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2"onClick={() => onSignIN(prev => !prev)} >Login</button>
          <button type="button" className="btn btn-warning" onClick={() => onSignUp(prev => !prev)}>Sign-up</button>
        </div>
      </div>
  </header>
      </div> */}
    </>
  );
};
