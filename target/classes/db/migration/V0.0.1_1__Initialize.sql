--
-- MySQL Flywheel Initialization
--

-- CREATE USER 'smdbtsu'@'%';
-- ALTER USER 'smdbtsu'@'%'
-- IDENTIFIED BY 'password' ;
-- GRANT Alter ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Create ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Create view ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Delete ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Drop ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Grant option ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Index ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Insert ON smdb.* TO 'smdbtsu'@'%';
-- GRANT References ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Select ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Show view ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Trigger ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Update ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Alter routine ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Create routine ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Create temporary tables ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Execute ON smdb.* TO 'smdbtsu'@'%';
-- GRANT Lock tables ON smdb.* TO 'smdbtsu'@'%';
-- FLUSH PRIVILEGES;

CREATE TABLE `org` (
  `orgid` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '0',
  `create_date` timestamp(6) NULL DEFAULT NULL,
  `create_email` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `modify_date` timestamp(6) NULL DEFAULT NULL,
  `modify_email` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`orgid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `feature` (
  `featureid` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `value` double NOT NULL DEFAULT '0',
  `weight` double NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`featureid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `orgscore` (
  `orgscoreid` bigint(20) unsigned NOT NULL,
  `orgid` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '0',
  `create_date` timestamp(6) NULL DEFAULT NULL,
  `create_email` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`orgscoreid`),
  KEY `orgscore_1` (`orgid`),
  CONSTRAINT `c_orgscore_1` FOREIGN KEY (`orgid`) REFERENCES `org` (`orgid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `orgscore_feature` (
  `orgscoreid` bigint(20) unsigned NOT NULL,
  `featureid` bigint(20) unsigned NOT NULL,
  `value` double NOT NULL DEFAULT '0',
  `weight` double NOT NULL DEFAULT '0',
  `create_date` timestamp(6) NULL DEFAULT NULL,
  `create_email` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`orgscoreid`,`featureid`),
  CONSTRAINT `c_orgscore_feature_1` FOREIGN KEY (`orgscoreid`) REFERENCES `orgscore` (`orgscoreid`) ON DELETE CASCADE,
  CONSTRAINT `c_orgscore_feature_2` FOREIGN KEY (`featureid`) REFERENCES `feature` (`featureid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
