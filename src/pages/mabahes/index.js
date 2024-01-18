import React from 'react'
import AsreDigital from '../../components/Subject/AsrDigital';
import GhaireEghtesad from '../../components/Subject/GhaireEghtesad';
import Iran from '../../components/Subject/Iran';
import Modern from '../../components/Subject/Modern';
import EghtesadNapazir from '../../components/Subject/EghtesadNapazir';
import AyandePajuhi from '../../components/Subject/AyandePajuhi';



function Mabahes() {
  return (
    <div className=" mx-auto p-10 bg-secondary ">
    
    <AsreDigital  />
    <GhaireEghtesad/>
    <Iran/>
    <Modern/>
    <EghtesadNapazir/>
    <AyandePajuhi/>
  </div>
);
}
Mabahes.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
  };
export default Mabahes


