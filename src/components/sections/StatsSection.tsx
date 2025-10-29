import React from "react";
import Image from "next/image";
import facebook2 from "../../app/assets/facebook2.png";
const StatsSection = () => {


    return (
          <div className="section2-container">
                <div className="section2">
                    <div className="heading1">
                        <p className="number">89,2K+</p>
                        <p className="label">In Revenue</p>
                    </div>
                    <div className="heading1">
                        <p className="number">7001+</p>
                        <p className="label">Qualified Leads</p>
                    </div>
                    <div className="heading1">
                        <p className="number">30,124+</p>
                        <p className="label">Trusted Customers</p>
                    </div>
                </div>
                <Image src={facebook2} alt="facebook" className="facebook-img" />
            </div>


    );
};

export default StatsSection;
