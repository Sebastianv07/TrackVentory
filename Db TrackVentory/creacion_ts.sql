connect system/1234

show con_name

ALTER SESSION SET CONTAINER=CDB$ROOT;
ALTER DATABASE OPEN;

DROP TABLESPACE ts_trackventory_ppi INCLUDING CONTENTS and DATAFILES;
    
CREATE TABLESPACE ts_trackventory_ppi LOGGING
DATAFILE 'd:\Documents\TrackVentory\Db TrackVentory\DF_TRACKVENTORYPPI.DBF' size 200K
extent management local segment space management auto; 
 
alter session set "_ORACLE_SCRIPT"=true; 
 
drop user US_TRACKVENTORY_PPI cascade;
    
CREATE user US_TRACKVENTORY_PPI profile default 
identified by 1234
default tablespace ts_trackventory_ppi
temporary tablespace temp 
account unlock;     

--privilegios
grant connect, resource,dba to US_TRACKVENTORY_PPI; 

connect US_TRACKVENTORY_PPI/1234

show user
