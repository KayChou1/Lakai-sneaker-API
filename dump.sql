--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

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
-- Name: sneakers; Type: TABLE; Schema: public; Owner: -
--


CREATE TABLE public.sneakers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    size character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    color character varying(255) NOT NULL
);


--
-- Name: sneakers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sneakers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sneakers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sneakers_id_seq OWNED BY public.sneakers.id;


--
-- Name: sneakers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sneakers ALTER COLUMN id SET DEFAULT nextval('public.sneakers_id_seq'::regclass);


--
-- Data for Name: sneakers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sneakers (id, name, size, image, color) FROM stdin;
9	griffin	9	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/GRIFFIN_TAN-GUM-SUEDE_MS2200227A00_TANGS_02_1200x.jpg?v=1589521812	tan
10	griffin	9	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/TRIPLEBLACK_02_1200x.jpg?v=1588960719	black
11	griffin	9	https://www.lakai.com/collections/all/products/griffin-red-canvas-ms3190227a00	pink
12	griffin	9	https://www.lakai.com/products/griffin-tie-dye-canvas-ms3190227a00?_pos=1&_sid=2ecf4c47d&_ss=r	tiedye
13	riley 2 VELCRO STRAP	9	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/RILEY-2-VS_WHITE-LEATHER_MS2200092A00_WHLTR_02_1200x.jpg?v=1589521982	white
14	CAMBRIDGE	10	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/CAMBRIDGE_WHITE-BLACK-SUEDE_MS2200252A00_WHBKS_02_1200x.jpg?v=1589521638	white
15	CAMBRIDGE	9	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/CAMBRIDGE_SLATE-YELLOW-SUEDE_MS1200252A00_SLYWS_02_1200x.jpg?v=1582135824	blue
16	CAMBRIDGE	11	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/CAMBRIDGE_BLACK-WHITE-SUEDE_MS1200252A00_BKWTS_02_1200x.jpg?v=1580931579	black
17	CAMBRIDGE	11	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/CAMBRIDGE_BURGUNDY-SUEDE_MS3190252A00_BURSD_02_1200x.jpg?v=1571711744	burgundysuede
18	RILEY 2 VELCRO STRAP	10	https://cdn.shopify.com/s/files/1/0079/6740/8228/products/RILEY-2-VS_BLACK-SUEDE_MS2200092A00_BLKSD_02_1200x.jpg?v=1589521940	black
\.


--
-- Name: sneakers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sneakers_id_seq', 18, true);


--
-- Name: sneakers sneakers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sneakers
    ADD CONSTRAINT sneakers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

