import React from 'react';
import { Link } from 'react-router-dom';
import './Qunumber.css'

const Qunumber = ({ Quiz }) => {
  const { id, que, ans1, ans2, ans3, ans4 } = Quiz;

  return (
    <div>
      <div className="col">
        <div className="card h-100">
          {/* <img className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <p className="card-text text-start" style={{ fontSize: '20px' }}>{id}. {que}</p>
          </div>
          <div>

            <tr >
              <td className='px-4'><label class="containerq">{ans1}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label></td>
              <td className='px-4'><label class="containerq">{ans2}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label></td>
            </tr>

            <tr>
              <td className='px-4'><label class="containerq">{ans3}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label></td>
              <td className='px-4'><label class="containerq">{ans4}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label></td>
            </tr>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Qunumber;