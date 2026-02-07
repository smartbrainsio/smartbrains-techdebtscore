insert into org (orgid, name, status, create_date, create_email, modify_date, modify_email) 
values (1,'SmartBrains.io',1,NOW(),'support@smartbrains.io',NOW(),'support@smartbrains.io');

insert into feature (featureid, name, value, weight, status) 
values (1,'Code Style & Formatting',100,1,1);
insert into feature (featureid, name, value, weight, status) 
values (2,'Modularity & Coupling',100,1,1);
insert into feature (featureid, name, value, weight, status) 
values (3,'Test Coverage & Automation',100,1,1);
insert into feature (featureid, name, value, weight, status) 
values (4,'CI/CD & Changes',100,1,1);
insert into feature (featureid, name, value, weight, status) 
values (5,'EOSL & Lifecycle',100,1,1);
insert into feature (featureid, name, value, weight, status) 
values (6,'Documentation',100,1,1);
insert into feature (featureid, name, value, weight, status) 
values (7,'Homogenity of Tech Stack',100,1,1);
insert into feature (featureid, name, value, weight, status) 
values (8,'Architectural Complexity',100,1,1);

insert into orgscore (orgscoreid, orgid, name, status, create_date, create_email) 
values (1,1,'Demo Score',1,NOW(),'support@smartbrains.io');

insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,1,100,1,NOW(),'support@smartbrains.io');
insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,2,100,1,NOW(),'support@smartbrains.io');
insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,3,100,1,NOW(),'support@smartbrains.io');
insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,4,100,1,NOW(),'support@smartbrains.io');
insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,5,100,1,NOW(),'support@smartbrains.io');
insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,6,100,1,NOW(),'support@smartbrains.io');
insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,7,100,1,NOW(),'support@smartbrains.io');
insert into orgscore_feature (orgscoreid, featureid, value, weight, create_date, create_email) 
values (1,8,100,1,NOW(),'support@smartbrains.io');


