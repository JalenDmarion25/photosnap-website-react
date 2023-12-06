import { useState } from 'react';
import '../../styles/pricing/plansComparePricing.css';
import checkmark from '../../assets/pricing/desktop/check.svg';

const plansComparePricing = () => {

  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pricing-container">
      <div className="pricing-switch">
        <h4>Monthly</h4>
        <input
          type="checkbox"
          id="switch"
          checked={isYearly}
          onChange={() => setIsYearly(!isYearly)}
        />
        <label htmlFor="switch">Toggle</label>
        <h4>Yearly</h4>
      </div>
      <div className="membership-cards">
        <div className="basic-business-cards basic">
        <div className="detail-tier">

          <h3>Basic</h3>
          <p>
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          </div>
          {isYearly ? (
            <div className="per-year-price">
              <h2>$190.00</h2>
              <p>per year</p>
            </div>
          ) : (
            <div className="per-month-price">
              <h2>$19.00</h2>
              <p>per month</p>
            </div>
          )}


          <button>Pick Plan</button>
        </div>

        <div className="pro-card">

          <div className="detail-tier">
          <h3>Pro</h3>
          <p>
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          </div>


          {isYearly ? (
            <div className="per-year-price">
              <h2>$390.00</h2>
              <p>per year</p>
            </div>
          ) : (
            <div className="per-month-price">
              <h2>$39.00</h2>
              <p>per month</p>
            </div>
          )}


          <button>Pick Plan</button>
        </div>

        <div className="basic-business-cards business">
        <div className="detail-tier">

          <h3>Business</h3>
          <p>
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          </div>
          
          {isYearly ? (
            <div className="per-year-price">
              <h2>$990.00</h2>
              <p>per year</p>
            </div>
          ) : (
            <div className="per-month-price">
              <h2>$99.00</h2>
              <p>per month</p>
            </div>
          )}

 

          <button>Pick Plan</button>
        </div>
      </div>

      <div className="table-comparison">
        <h2>Compare</h2>
        <table>
          <tr className="first-table-row">
            <th>The Features</th>
            <th className="table-memberships">Basic</th>
            <th className="table-memberships">Pro</th>
            <th className="table-memberships">Business</th>
          </tr>
          <tr>
            <td>Unlimted Story Posting</td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
          <tr>
            <td>Unlimited Photo Upload</td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
          <tr>
            <td>Embedding Custom Content</td>
            <td className="table-mark"></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
          <tr>
            <td>Customize Metadata</td>
            <td className="table-mark"></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
          <tr>
            <td>Advanced Metrics</td>
            <td className="table-mark"></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
          <tr>
            <td>Photo Downloads</td>
            <td className="table-mark"></td>
            <td className="table-mark"></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
          <tr>
            <td>Search Engine Indexing</td>
            <td className="table-mark"></td>
            <td className="table-mark"></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
          <tr>
            <td>Custom Analytics</td>
            <td className="table-mark"></td>
            <td className="table-mark"></td>
            <td className="table-mark"><img src={checkmark} alt="" /></td>
          </tr>
        </table>   

        <div className="mobile-table">
          <div className="mobile-table-title">
            <span>The Features</span>
          </div>
          <div className="mobile-table-row">
          <div className="mobile-col-one"><span>Unlimited Story Posting</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <img src={checkmark} alt="" />
              </span>
              <span className='row-item'>
                <span>Pro</span>
                <img src={checkmark} alt="" />
              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>
              <div className="mobile-col-one"><span>Unlimited Photo Upload</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <img src={checkmark} alt="" />
              </span>
              <span className='row-item'>
                <span>Pro</span>
                <img src={checkmark} alt="" />
              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>
              <div className="mobile-col-one"><span>Embedding Custom Content</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Pro</span>
                <img src={checkmark} alt="" />
              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>
              <div className="mobile-col-one"><span>Customize Metadata</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Pro</span>
                <img src={checkmark} alt="" />
              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>
              <div className="mobile-col-one"><span>Advanced Metrics</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Pro</span>
                <span></span>
              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>
              <div className="mobile-col-one"><span>Photo Downloads</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Pro</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>
              <div className="mobile-col-one"><span>Search Engine Indexing</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Pro</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>
              <div className="mobile-col-one"><span>Custom Analytics</span></div>
            <div className="mobile-col-two">
              <span className='row-item'>
                <span>Basic</span>
                <span></span>
              </span>
              <span className='row-item'>
                <span>Pro</span>
                <span></span>

              </span>
              <span className='row-item'>
                <span>Buisness</span>
                <img src={checkmark} alt="" />
              </span>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default plansComparePricing