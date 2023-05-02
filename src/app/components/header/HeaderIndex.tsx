import Icon from "./start/Icon";

import Solutions from "./middle/Solutions";
import Tax from "./middle/Tax";
import Help from "./middle/Help";

import DashBut from "./end/DashBut";

function HeaderIndex() {
  return (
    <div className="w-full flex flex-row justify-between items-center py-5 px-14">
      <Icon />
      <div className="w-auto flex flex-row 2xl:space-x-60 xl:space-x-40 lg:space-x-28 md:space-x-12 sm:space-x-8 space-x-5">
        <Solutions />
        <Tax />
        <Help />
      </div>
      <DashBut />
    </div>
  );
}

export default HeaderIndex;
