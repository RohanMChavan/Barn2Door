import { Skeleton } from "@mui/material";
import React from "react";




const AddressInfo = () => {
  const noAddressExist = false;
  const isLoading = true;

  return (
    <div className="pt-4">
      {noAddressExist ? (
        <div>
          <p> no Adress</p>
        </div>
      ) : (
        <div className="relative p-6 rounded-lg max-w-md mx-auto">
                <h1 className="text-slate-800 text-center font-bold text-2xl">
                            Select Address
                </h1>

                {isLoading ? (
                    <p><Skeleton /></p>
                ) : (
                        <div>

                        </div>
                )}
        </div>
      )}
    </div>
  );
};

export default AddressInfo;
