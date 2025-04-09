import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddAccountButton() {
  const navigate = useNavigate();

  const handleAddAccount = () => {
    navigate('/admin/create');
  };

  return (
    <div className="flex justify-end items-center w-full">
      <button
        className="flex gap-3 justify-center items-center px-3 py-3 text-xl font-medium text-white rounded-lg bg-[#6C8299] min-w-[240px] hover:bg-slate-600"
        onClick={handleAddAccount}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b78a7b0bea08f365ad78bb218941e4d8e9e9ff8cd391ee696af50d042524edd2?placeholderIfAbsent=true&apiKey=66913a0089c7476296e0d5e235a1975e"
          alt="Add Account Icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="gap-2.5 self-stretch my-auto">Thêm tài khoản</span>
      </button>
    </div>
  );
}

export default AddAccountButton;
