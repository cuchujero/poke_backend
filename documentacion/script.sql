-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Pokemon'
-- 
-- ---

DROP TABLE IF EXISTS `Pokemon`;
		
CREATE TABLE `Pokemon` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `nombre` VARCHAR(60) NOT NULL,
  `altura` VARCHAR(8) NOT NULL,
  `peso` VARCHAR(8) NOT NULL,
  `habitat` VARCHAR(32) NOT NULL,
  `tasa_crecimiento` VARCHAR(12) NOT NULL,
  `tasa_captura` VARCHAR(12) NOT NULL,
  `pre_evolucion` INT NULL,
  `evolucion` INT NULL,
  `color_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Movimiento'
-- 
-- ---

DROP TABLE IF EXISTS `Movimiento`;
		
CREATE TABLE `Movimiento` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Habilidad'
-- 
-- ---

DROP TABLE IF EXISTS `Habilidad`;
		
CREATE TABLE `Habilidad` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Tipo'
-- 
-- ---

DROP TABLE IF EXISTS `Tipo`;
		
CREATE TABLE `Tipo` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `nombre` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Imagen'
-- 
-- ---

DROP TABLE IF EXISTS `Imagen`;
		
CREATE TABLE `Imagen` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `url` VARCHAR(200) NOT NULL,
  `pokemon_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Color'
-- 
-- ---

DROP TABLE IF EXISTS `Color`;
		
CREATE TABLE `Color` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Pokemon_Tipo'
-- 
-- ---

DROP TABLE IF EXISTS `Pokemon_Tipo`;
		
CREATE TABLE `Pokemon_Tipo` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `pokemon_id` INTEGER NOT NULL,
  `tipo_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Pokemon_Movimiento'
-- 
-- ---

DROP TABLE IF EXISTS `Pokemon_Movimiento`;
		
CREATE TABLE `Pokemon_Movimiento` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `pokemon_id` INTEGER NOT NULL,
  `movimiento_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Pokemon_Habilidad'
-- 
-- ---

DROP TABLE IF EXISTS `Pokemon_Habilidad`;
		
CREATE TABLE `Pokemon_Habilidad` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `pokemon_id` INTEGER NOT NULL,
  `habilidad_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Pokemon` ADD FOREIGN KEY (pre_evolucion) REFERENCES `Pokemon` (`id`);
ALTER TABLE `Pokemon` ADD FOREIGN KEY (evolucion) REFERENCES `Pokemon` (`id`);
ALTER TABLE `Pokemon` ADD FOREIGN KEY (color_id) REFERENCES `Color` (`id`);
ALTER TABLE `Imagen` ADD FOREIGN KEY (pokemon_id) REFERENCES `Pokemon` (`id`);
ALTER TABLE `Pokemon_Tipo` ADD FOREIGN KEY (pokemon_id) REFERENCES `Pokemon` (`id`);
ALTER TABLE `Pokemon_Tipo` ADD FOREIGN KEY (tipo_id) REFERENCES `Tipo` (`id`);
ALTER TABLE `Pokemon_Movimiento` ADD FOREIGN KEY (pokemon_id) REFERENCES `Pokemon` (`id`);
ALTER TABLE `Pokemon_Movimiento` ADD FOREIGN KEY (movimiento_id) REFERENCES `Movimiento` (`id`);
ALTER TABLE `Pokemon_Habilidad` ADD FOREIGN KEY (pokemon_id) REFERENCES `Pokemon` (`id`);
ALTER TABLE `Pokemon_Habilidad` ADD FOREIGN KEY (habilidad_id) REFERENCES `Habilidad` (`id`);
