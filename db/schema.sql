--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

-- Started on 2021-10-02 09:46:39 PDT

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
-- TOC entry 207 (class 1259 OID 16643)
-- Name: ProductInfos; Type: TABLE; Schema: public; Owner: cassandrawages1
--

CREATE TABLE public."ProductInfos" (
    id integer NOT NULL
);


ALTER TABLE public."ProductInfos" OWNER TO cassandrawages1;

--
-- TOC entry 206 (class 1259 OID 16641)
-- Name: ProductInfos_id_seq; Type: SEQUENCE; Schema: public; Owner: cassandrawages1
--

CREATE SEQUENCE public."ProductInfos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ProductInfos_id_seq" OWNER TO cassandrawages1;

--
-- TOC entry 3328 (class 0 OID 0)
-- Dependencies: 206
-- Name: ProductInfos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cassandrawages1
--

ALTER SEQUENCE public."ProductInfos_id_seq" OWNED BY public."ProductInfos".id;


--
-- TOC entry 209 (class 1259 OID 16651)
-- Name: ProductLists; Type: TABLE; Schema: public; Owner: cassandrawages1
--

CREATE TABLE public."ProductLists" (
    id integer NOT NULL
);


ALTER TABLE public."ProductLists" OWNER TO cassandrawages1;

--
-- TOC entry 208 (class 1259 OID 16649)
-- Name: ProductLists_id_seq; Type: SEQUENCE; Schema: public; Owner: cassandrawages1
--

CREATE SEQUENCE public."ProductLists_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ProductLists_id_seq" OWNER TO cassandrawages1;

--
-- TOC entry 3329 (class 0 OID 0)
-- Dependencies: 208
-- Name: ProductLists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cassandrawages1
--

ALTER SEQUENCE public."ProductLists_id_seq" OWNED BY public."ProductLists".id;


--
-- TOC entry 211 (class 1259 OID 16659)
-- Name: Relateds; Type: TABLE; Schema: public; Owner: cassandrawages1
--

CREATE TABLE public."Relateds" (
    id integer NOT NULL
);


ALTER TABLE public."Relateds" OWNER TO cassandrawages1;

--
-- TOC entry 210 (class 1259 OID 16657)
-- Name: Relateds_id_seq; Type: SEQUENCE; Schema: public; Owner: cassandrawages1
--

CREATE SEQUENCE public."Relateds_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Relateds_id_seq" OWNER TO cassandrawages1;

--
-- TOC entry 3330 (class 0 OID 0)
-- Dependencies: 210
-- Name: Relateds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cassandrawages1
--

ALTER SEQUENCE public."Relateds_id_seq" OWNED BY public."Relateds".id;


--
-- TOC entry 213 (class 1259 OID 16667)
-- Name: Styles; Type: TABLE; Schema: public; Owner: cassandrawages1
--

CREATE TABLE public."Styles" (
    id integer NOT NULL
);


ALTER TABLE public."Styles" OWNER TO cassandrawages1;

--
-- TOC entry 212 (class 1259 OID 16665)
-- Name: Styles_id_seq; Type: SEQUENCE; Schema: public; Owner: cassandrawages1
--

CREATE SEQUENCE public."Styles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Styles_id_seq" OWNER TO cassandrawages1;

--
-- TOC entry 3331 (class 0 OID 0)
-- Dependencies: 212
-- Name: Styles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cassandrawages1
--

ALTER SEQUENCE public."Styles_id_seq" OWNED BY public."Styles".id;


--
-- TOC entry 204 (class 1259 OID 16598)
-- Name: features; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.features (
    id integer NOT NULL,
    product_id integer,
    feature character varying,
    value character varying
);


ALTER TABLE public.features OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16585)
-- Name: photos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.photos (
    id integer NOT NULL,
    "styleId" integer,
    thumbnail_url character varying,
    url character varying
);


ALTER TABLE public.photos OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16551)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying,
    slogan character varying,
    description character varying,
    category character varying,
    default_price integer
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16612)
-- Name: related; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.related (
    id integer NOT NULL,
    current_product_id integer,
    related_product_id integer
);


ALTER TABLE public.related OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16572)
-- Name: skus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skus (
    id integer NOT NULL,
    "styleId" integer,
    size character varying,
    quantity integer
);


ALTER TABLE public.skus OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16559)
-- Name: styles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.styles (
    id integer NOT NULL,
    productid integer,
    name character varying,
    sale_price character varying,
    original_price character varying,
    default_style integer
);


ALTER TABLE public.styles OWNER TO postgres;

--
-- TOC entry 3164 (class 2604 OID 16646)
-- Name: ProductInfos id; Type: DEFAULT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."ProductInfos" ALTER COLUMN id SET DEFAULT nextval('public."ProductInfos_id_seq"'::regclass);


--
-- TOC entry 3165 (class 2604 OID 16654)
-- Name: ProductLists id; Type: DEFAULT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."ProductLists" ALTER COLUMN id SET DEFAULT nextval('public."ProductLists_id_seq"'::regclass);


--
-- TOC entry 3166 (class 2604 OID 16662)
-- Name: Relateds id; Type: DEFAULT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."Relateds" ALTER COLUMN id SET DEFAULT nextval('public."Relateds_id_seq"'::regclass);


--
-- TOC entry 3167 (class 2604 OID 16670)
-- Name: Styles id; Type: DEFAULT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."Styles" ALTER COLUMN id SET DEFAULT nextval('public."Styles_id_seq"'::regclass);


--
-- TOC entry 3181 (class 2606 OID 16648)
-- Name: ProductInfos ProductInfos_pkey; Type: CONSTRAINT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."ProductInfos"
    ADD CONSTRAINT "ProductInfos_pkey" PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 16656)
-- Name: ProductLists ProductLists_pkey; Type: CONSTRAINT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."ProductLists"
    ADD CONSTRAINT "ProductLists_pkey" PRIMARY KEY (id);


--
-- TOC entry 3185 (class 2606 OID 16664)
-- Name: Relateds Relateds_pkey; Type: CONSTRAINT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."Relateds"
    ADD CONSTRAINT "Relateds_pkey" PRIMARY KEY (id);


--
-- TOC entry 3187 (class 2606 OID 16672)
-- Name: Styles Styles_pkey; Type: CONSTRAINT; Schema: public; Owner: cassandrawages1
--

ALTER TABLE ONLY public."Styles"
    ADD CONSTRAINT "Styles_pkey" PRIMARY KEY (id);


--
-- TOC entry 3177 (class 2606 OID 16605)
-- Name: features features_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);


--
-- TOC entry 3175 (class 2606 OID 16592)
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- TOC entry 3169 (class 2606 OID 16558)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 3179 (class 2606 OID 16616)
-- Name: related related_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.related
    ADD CONSTRAINT related_pkey PRIMARY KEY (id);


--
-- TOC entry 3173 (class 2606 OID 16579)
-- Name: skus skus_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skus
    ADD CONSTRAINT skus_pkey PRIMARY KEY (id);


--
-- TOC entry 3171 (class 2606 OID 16566)
-- Name: styles styles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_pkey PRIMARY KEY (id);


--
-- TOC entry 3191 (class 2606 OID 16606)
-- Name: features features_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- TOC entry 3190 (class 2606 OID 16593)
-- Name: photos photos_styleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT "photos_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES public.styles(id);


--
-- TOC entry 3188 (class 2606 OID 16567)
-- Name: styles productid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT productid FOREIGN KEY (productid) REFERENCES public.product(id);


--
-- TOC entry 3192 (class 2606 OID 16617)
-- Name: related related_current_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.related
    ADD CONSTRAINT related_current_product_id_fkey FOREIGN KEY (current_product_id) REFERENCES public.product(id);


--
-- TOC entry 3189 (class 2606 OID 16580)
-- Name: skus skus_styleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skus
    ADD CONSTRAINT "skus_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES public.styles(id);


-- Completed on 2021-10-02 09:46:40 PDT

--
-- PostgreSQL database dump complete
--

