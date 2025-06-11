-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 11 juin 2025 à 11:43
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve_ton_artisan`
--

--
-- Déchargement des données de la table `artisan`
--

INSERT INTO `artisan` (`id`, `nom`, `note`, `ville`, `a_propos`, `email`, `site`, `image`, `specialite_id`, `top`) VALUES
(1, 'Boucherie Dumont', 4.5, 'Lyon', 'Boucherie de Quartier au très bon rapport qualité-prix', 'boucherie.dumond@gmail.com', '', 'metier.jpg', 1, 0),
(2, 'Au pain chaud', 4.8, 'Montelimar', 'Boulangerie spécialisée en pains spéciaux', 'aupainchaud@hotmail.com', '', 'metier.jpg', 2, 1),
(3, 'Chocolaterie Labbé', 4.9, 'Lyon', 'Chocolatier de père en fils, excellente réputation dans la région', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 'metier.jpg', 3, 1),
(4, 'Traiteur Truchon', 4.1, 'Lyon', 'Le grand traiteur pour toutes vos occasions', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 'metier.jpg', 4, 0),
(5, 'Orville Salmons', 5, 'Evian', 'Un professionnel à votre service 24/24', 'o-salmons@live.com', '', 'metier.jpg', 5, 1),
(6, 'Mont Blanc Electricité', 4.5, 'Chamonix', 'Nous sommes fais pour travailler ensemble', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 'metier.jpg', 6, 0),
(7, 'Boutot & Fils', 4.7, 'Bourg-en-bresse', 'Venez avec votre projet, on se charge du reste', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 'metier.jpg', 7, 0),
(8, 'Vallis Bellemare', 4, 'Vienne', 'Professionnel reconnu dans la région', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 'metier.jpg', 8, 0),
(9, 'Claude Quinn', 4.2, 'Aix-les-bains', 'le plus grand choix de montre de la région', 'claude.quinn@gmail.com', '', 'metier.jpg', 9, 0),
(10, 'Amitee Lécuyer', 4.5, 'Annecy', 'Votre spécialiste des robes de mariage sur mesure', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 'metier.jpg', 10, 0),
(11, 'Ernest Carignan', 5, 'Le Puy-en-velay', 'il sait tout fer', 'e-carignan@hotmail.com', '', 'metier.jpg', 11, 0),
(12, 'Royden Charbonneau', 3.8, 'Saint-Priest', 'La coiffure a prix discount', 'r.charbonneau@gmail.com', '', 'metier.jpg', 12, 0),
(13, 'Leala Dennis', 3.8, 'Chambéry', 'La coiffure sans rendez-vous', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 'metier.jpg', 12, 0),
(14, 'C est Sup hair', 4.1, 'Romans-sur-isère', 'Votre coiffure stylée à petit prix', 'sup-hair@gmail.com', 'https://sup-hair.com', 'metier.jpg', 12, 0),
(15, 'Le monde des fleurs', 4.6, 'Annonay', 'le royaume des fleurs proche de chez vous', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 'metier.jpg', 13, 0),
(16, 'Valérie Laredoute', 4.5, 'Valence', 'Tout pour la beauté de votre chien', 'v-laredoute@gmail.com', '', 'metier.jpg', 14, 0),
(17, 'CM Graphisme', 4.4, 'Valence', 'Nous créons votre site internet à votre place', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 'metier.jpg', 15, 0);

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `nom`) VALUES
(1, 'alimentation'),
(2, 'bâtiment'),
(3, 'fabrication'),
(4, 'services');

--
-- Déchargement des données de la table `specialite`
--

INSERT INTO `specialite` (`id`, `nom`, `categorie_id`) VALUES
(1, 'Boucher', 1),
(2, 'Boulanger', 1),
(3, 'Chocolatier', 1),
(4, 'Traiteur', 1),
(5, 'Chauffagiste', 2),
(6, 'electricien', 2),
(7, 'Menuisier', 2),
(8, 'Plombier', 2),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),
(12, 'Coiffeur', 4),
(13, 'fleuriste', 4),
(14, 'Toiletteur', 4),
(15, 'Webdesign', 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
