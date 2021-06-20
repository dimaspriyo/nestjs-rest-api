--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Debian 12.6-1.pgdg100+1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

-- Started on 2021-06-20 21:28:14 WIB

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

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3016 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 205 (class 1259 OID 16572)
-- Name: account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account (
    id character varying NOT NULL,
    name character varying NOT NULL,
    created_date timestamp without time zone NOT NULL,
    created_by character varying NOT NULL,
    password character varying NOT NULL,
    email character varying NOT NULL,
    role_id character varying
);


ALTER TABLE public.account OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16556)
-- Name: api_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.api_permission (
    id character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.api_permission OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16614)
-- Name: barang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barang (
    id character varying NOT NULL,
    nama character varying NOT NULL,
    jumlah bigint NOT NULL,
    keterangan character varying NOT NULL,
    id_satuan character varying
);


ALTER TABLE public.barang OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16582)
-- Name: barang_keluar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barang_keluar (
    id character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.barang_keluar OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16590)
-- Name: barang_keluar_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barang_keluar_item (
    id character varying NOT NULL,
    jumlah bigint NOT NULL,
    id_barang character varying,
    id_barang_keluar character varying,
    id_satuan character varying
);


ALTER TABLE public.barang_keluar_item OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16598)
-- Name: barang_masuk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barang_masuk (
    id character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.barang_masuk OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16606)
-- Name: barang_masuk_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barang_masuk_item (
    id character varying NOT NULL,
    jumlah bigint NOT NULL,
    id_barang character varying,
    id_barang_masuk character varying,
    id_satuan character varying
);


ALTER TABLE public.barang_masuk_item OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16548)
-- Name: page_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.page_permission (
    id character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.page_permission OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16564)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16640)
-- Name: role_api_Permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."role_api_Permission" (
    "roleId" character varying NOT NULL,
    "apiPermissionId" character varying NOT NULL
);


ALTER TABLE public."role_api_Permission" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16630)
-- Name: role_page_Permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."role_page_Permission" (
    "roleId" character varying NOT NULL,
    "pagePermissionId" character varying NOT NULL
);


ALTER TABLE public."role_page_Permission" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16622)
-- Name: satuan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.satuan (
    id character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.satuan OWNER TO postgres;

--
-- TOC entry 3002 (class 0 OID 16572)
-- Dependencies: 205
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account (id, name, created_date, created_by, password, email, role_id) FROM stdin;
\.


--
-- TOC entry 3000 (class 0 OID 16556)
-- Dependencies: 203
-- Data for Name: api_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.api_permission (id, name) FROM stdin;
\.


--
-- TOC entry 3007 (class 0 OID 16614)
-- Dependencies: 210
-- Data for Name: barang; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barang (id, nama, jumlah, keterangan, id_satuan) FROM stdin;
\.


--
-- TOC entry 3003 (class 0 OID 16582)
-- Dependencies: 206
-- Data for Name: barang_keluar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barang_keluar (id, name) FROM stdin;
\.


--
-- TOC entry 3004 (class 0 OID 16590)
-- Dependencies: 207
-- Data for Name: barang_keluar_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barang_keluar_item (id, jumlah, id_barang, id_barang_keluar, id_satuan) FROM stdin;
\.


--
-- TOC entry 3005 (class 0 OID 16598)
-- Dependencies: 208
-- Data for Name: barang_masuk; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barang_masuk (id, name) FROM stdin;
\.


--
-- TOC entry 3006 (class 0 OID 16606)
-- Dependencies: 209
-- Data for Name: barang_masuk_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barang_masuk_item (id, jumlah, id_barang, id_barang_masuk, id_satuan) FROM stdin;
\.


--
-- TOC entry 2999 (class 0 OID 16548)
-- Dependencies: 202
-- Data for Name: page_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.page_permission (id, name) FROM stdin;
\.


--
-- TOC entry 3001 (class 0 OID 16564)
-- Dependencies: 204
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role (id, name) FROM stdin;
\.


--
-- TOC entry 3010 (class 0 OID 16640)
-- Dependencies: 213
-- Data for Name: role_api_Permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."role_api_Permission" ("roleId", "apiPermissionId") FROM stdin;
\.


--
-- TOC entry 3009 (class 0 OID 16630)
-- Dependencies: 212
-- Data for Name: role_page_Permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."role_page_Permission" ("roleId", "pagePermissionId") FROM stdin;
\.


--
-- TOC entry 3008 (class 0 OID 16622)
-- Dependencies: 211
-- Data for Name: satuan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.satuan (id, name) FROM stdin;
\.


--
-- TOC entry 2860 (class 2606 OID 16647)
-- Name: role_api_Permission PK_3c8cb94ff4a702681289b8ba7c7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."role_api_Permission"
    ADD CONSTRAINT "PK_3c8cb94ff4a702681289b8ba7c7" PRIMARY KEY ("roleId", "apiPermissionId");


--
-- TOC entry 2832 (class 2606 OID 16555)
-- Name: page_permission PK_4b8cc5708ce50abcaf35857f6d1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.page_permission
    ADD CONSTRAINT "PK_4b8cc5708ce50abcaf35857f6d1" PRIMARY KEY (id);


--
-- TOC entry 2844 (class 2606 OID 16597)
-- Name: barang_keluar_item PK_4deb4860379f292e26ddf302e07; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_keluar_item
    ADD CONSTRAINT "PK_4deb4860379f292e26ddf302e07" PRIMARY KEY (id);


--
-- TOC entry 2838 (class 2606 OID 16579)
-- Name: account PK_54115ee388cdb6d86bb4bf5b2ea; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY (id);


--
-- TOC entry 2834 (class 2606 OID 16563)
-- Name: api_permission PK_88d74454101c87aa8c5dfa8f484; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.api_permission
    ADD CONSTRAINT "PK_88d74454101c87aa8c5dfa8f484" PRIMARY KEY (id);


--
-- TOC entry 2846 (class 2606 OID 16605)
-- Name: barang_masuk PK_8d9a68fcb68909a32806b3bf433; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_masuk
    ADD CONSTRAINT "PK_8d9a68fcb68909a32806b3bf433" PRIMARY KEY (id);


--
-- TOC entry 2848 (class 2606 OID 16613)
-- Name: barang_masuk_item PK_b148448032fe314325f00fcbe06; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_masuk_item
    ADD CONSTRAINT "PK_b148448032fe314325f00fcbe06" PRIMARY KEY (id);


--
-- TOC entry 2836 (class 2606 OID 16571)
-- Name: role PK_b36bcfe02fc8de3c57a8b2391c2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY (id);


--
-- TOC entry 2842 (class 2606 OID 16589)
-- Name: barang_keluar PK_b798a53db213af2a011d5270e9c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_keluar
    ADD CONSTRAINT "PK_b798a53db213af2a011d5270e9c" PRIMARY KEY (id);


--
-- TOC entry 2852 (class 2606 OID 16629)
-- Name: satuan PK_cf5ef45ee02ed3decfc1a06dbc6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.satuan
    ADD CONSTRAINT "PK_cf5ef45ee02ed3decfc1a06dbc6" PRIMARY KEY (id);


--
-- TOC entry 2856 (class 2606 OID 16637)
-- Name: role_page_Permission PK_f217a079e3768163d13718e40d0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."role_page_Permission"
    ADD CONSTRAINT "PK_f217a079e3768163d13718e40d0" PRIMARY KEY ("roleId", "pagePermissionId");


--
-- TOC entry 2850 (class 2606 OID 16621)
-- Name: barang PK_f72eb4a0ebce770648bd746560f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang
    ADD CONSTRAINT "PK_f72eb4a0ebce770648bd746560f" PRIMARY KEY (id);


--
-- TOC entry 2840 (class 2606 OID 16581)
-- Name: account UQ_4c8f96ccf523e9a3faefd5bdd4c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "UQ_4c8f96ccf523e9a3faefd5bdd4c" UNIQUE (email);


--
-- TOC entry 2857 (class 1259 OID 16649)
-- Name: IDX_00266b9627950deb925033e702; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_00266b9627950deb925033e702" ON public."role_api_Permission" USING btree ("apiPermissionId");


--
-- TOC entry 2858 (class 1259 OID 16648)
-- Name: IDX_807648e753ebac251a56de5a40; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_807648e753ebac251a56de5a40" ON public."role_api_Permission" USING btree ("roleId");


--
-- TOC entry 2853 (class 1259 OID 16638)
-- Name: IDX_f38ab8472aa400e0793cd8496a; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_f38ab8472aa400e0793cd8496a" ON public."role_page_Permission" USING btree ("roleId");


--
-- TOC entry 2854 (class 1259 OID 16639)
-- Name: IDX_f749e5600c7cfcded38f5fa285; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_f749e5600c7cfcded38f5fa285" ON public."role_page_Permission" USING btree ("pagePermissionId");


--
-- TOC entry 2872 (class 2606 OID 16705)
-- Name: role_api_Permission FK_00266b9627950deb925033e7028; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."role_api_Permission"
    ADD CONSTRAINT "FK_00266b9627950deb925033e7028" FOREIGN KEY ("apiPermissionId") REFERENCES public.api_permission(id) ON DELETE CASCADE;


--
-- TOC entry 2863 (class 2606 OID 16660)
-- Name: barang_keluar_item FK_0da23812cef10e596dc689be520; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_keluar_item
    ADD CONSTRAINT "FK_0da23812cef10e596dc689be520" FOREIGN KEY (id_barang_keluar) REFERENCES public.barang_keluar(id);


--
-- TOC entry 2865 (class 2606 OID 16670)
-- Name: barang_masuk_item FK_1f4676f6231dd981ddfdc0e780e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_masuk_item
    ADD CONSTRAINT "FK_1f4676f6231dd981ddfdc0e780e" FOREIGN KEY (id_barang) REFERENCES public.barang(id);


--
-- TOC entry 2864 (class 2606 OID 16665)
-- Name: barang_keluar_item FK_28249f80b714201bb4256d3df46; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_keluar_item
    ADD CONSTRAINT "FK_28249f80b714201bb4256d3df46" FOREIGN KEY (id_satuan) REFERENCES public.satuan(id);


--
-- TOC entry 2868 (class 2606 OID 16685)
-- Name: barang FK_759fc7b6413855735870b570955; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang
    ADD CONSTRAINT "FK_759fc7b6413855735870b570955" FOREIGN KEY (id_satuan) REFERENCES public.satuan(id);


--
-- TOC entry 2871 (class 2606 OID 16700)
-- Name: role_api_Permission FK_807648e753ebac251a56de5a40a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."role_api_Permission"
    ADD CONSTRAINT "FK_807648e753ebac251a56de5a40a" FOREIGN KEY ("roleId") REFERENCES public.role(id) ON DELETE CASCADE;


--
-- TOC entry 2861 (class 2606 OID 16650)
-- Name: account FK_d3890c96feefc95c7cfd788cfda; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "FK_d3890c96feefc95c7cfd788cfda" FOREIGN KEY (role_id) REFERENCES public.role(id);


--
-- TOC entry 2867 (class 2606 OID 16680)
-- Name: barang_masuk_item FK_d395367c38b8763e5ef444694ea; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_masuk_item
    ADD CONSTRAINT "FK_d395367c38b8763e5ef444694ea" FOREIGN KEY (id_satuan) REFERENCES public.satuan(id);


--
-- TOC entry 2862 (class 2606 OID 16655)
-- Name: barang_keluar_item FK_d9d9aad35eec0029a7a3a7d5424; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_keluar_item
    ADD CONSTRAINT "FK_d9d9aad35eec0029a7a3a7d5424" FOREIGN KEY (id_barang) REFERENCES public.barang(id);


--
-- TOC entry 2866 (class 2606 OID 16675)
-- Name: barang_masuk_item FK_e9850c1cc597057323f13abb603; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang_masuk_item
    ADD CONSTRAINT "FK_e9850c1cc597057323f13abb603" FOREIGN KEY (id_barang_masuk) REFERENCES public.barang_masuk(id);


--
-- TOC entry 2869 (class 2606 OID 16690)
-- Name: role_page_Permission FK_f38ab8472aa400e0793cd8496af; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."role_page_Permission"
    ADD CONSTRAINT "FK_f38ab8472aa400e0793cd8496af" FOREIGN KEY ("roleId") REFERENCES public.role(id) ON DELETE CASCADE;


--
-- TOC entry 2870 (class 2606 OID 16695)
-- Name: role_page_Permission FK_f749e5600c7cfcded38f5fa2855; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."role_page_Permission"
    ADD CONSTRAINT "FK_f749e5600c7cfcded38f5fa2855" FOREIGN KEY ("pagePermissionId") REFERENCES public.page_permission(id) ON DELETE CASCADE;


-- Completed on 2021-06-20 21:28:14 WIB

--
-- PostgreSQL database dump complete
--

