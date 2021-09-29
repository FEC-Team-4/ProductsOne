-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'products'
--
-- ---

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `campus` VARCHAR(30) NULL DEFAULT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `slogan` VARCHAR(300) NULL DEFAULT NULL,
  `description` INTEGER NULL DEFAULT NULL,
  `category` VARCHAR(50) NULL DEFAULT NULL,
  `default_price` VARCHAR(10) NULL DEFAULT NULL,
  `created_at` VARCHAR(50) NULL DEFAULT NULL,
  `updated_at` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'styles'
--
-- ---

DROP TABLE IF EXISTS `styles`;

CREATE TABLE `styles` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `style_id` INTEGER NULL DEFAULT NULL,
  `name` INTEGER NULL DEFAULT NULL,
  `original_price` INTEGER NULL DEFAULT NULL,
  `sale_price` INTEGER NULL DEFAULT NULL,
  `default?` INTEGER NULL DEFAULT NULL,
  `photos_fk` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Related Products'
--
-- ---

DROP TABLE IF EXISTS `Related Products`;

CREATE TABLE `Related Products` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `style_id` INTEGER NULL DEFAULT NULL,
  `thumbnail_url` VARCHAR(300) NULL DEFAULT NULL,
  `url` VARCHAR(300) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'related'
--
-- ---

DROP TABLE IF EXISTS `related`;

CREATE TABLE `related` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `related` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'features'
--
-- ---

DROP TABLE IF EXISTS `features`;

CREATE TABLE `features` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NULL DEFAULT NULL,
  `feature` VARCHAR(100) NULL DEFAULT NULL,
  `value` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `styles` ADD FOREIGN KEY (product_id) REFERENCES `products` (`id`);
ALTER TABLE `styles` ADD FOREIGN KEY (photos_fk) REFERENCES `photos` (`id`);
ALTER TABLE `related` ADD FOREIGN KEY (product_id) REFERENCES `products` (`id`);
ALTER TABLE `features` ADD FOREIGN KEY (product_id) REFERENCES `products` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Related Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `related` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `products` (`id`,`product_id`,`campus`,`name`,`slogan`,`description`,`category`,`default_price`,`created_at`,`updated_at`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `styles` (`id`,`product_id`,`style_id`,`name`,`original_price`,`sale_price`,`default?`,`photos_fk`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Related Products` (`id`) VALUES
-- ('');
-- INSERT INTO `photos` (`id`,`style_id`,`thumbnail_url`,`url`) VALUES
-- ('','','','');
-- INSERT INTO `related` (`id`,`product_id`,`related`) VALUES
-- ('','','');
-- INSERT INTO `features` (`id`,`product_id`,`feature`,`value`) VALUES
-- ('','','','');