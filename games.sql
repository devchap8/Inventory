--
-- PostgreSQL database dump
--

\restrict 8Q53DIFM4HdOs6wZZFjSjcVg7GaXni9zXMbk943WEDCfe3c2XCd5VyKIeGlPpFd

-- Dumped from database version 14.24 (Ubuntu 14.24-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.24 (Ubuntu 14.24-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    name character varying(255),
    genres text[],
    release_year integer,
    developers text[],
    description text
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.games ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.games_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.games (id, name, genres, release_year, developers, description) FROM stdin;
2	Minecraft	{sandbox,adventure,survival}	2011	{Mojang,Microsoft}	Open-world sandbox survival game where players can build almost anything
4	Rocket League	{sports,action,competitive}	2015	{Psyonix,"Epic Games"}	Physics-based competitive soccer game with rocket-powered flying cars
\.


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 7, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict 8Q53DIFM4HdOs6wZZFjSjcVg7GaXni9zXMbk943WEDCfe3c2XCd5VyKIeGlPpFd

