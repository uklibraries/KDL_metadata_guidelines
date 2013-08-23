# Kentucky Digital Library Metadata Guidelines ![KDL logo](kdl_logo.png)

Updated August 2013
<hr/>

## 1 Introduction

>*The Kentucky Digital Library (KDL) is built to enhance scholarship, research and lifelong learning through the establishment of access to shared digital archival collections in the state of Kentucky. It also provides guidance and instruction for Kentucky libraries, archives, historical societies and museums on applying appropriate technologies used in the production of digital library resources.*
</blockquote>
- from the mission statement

The Kentucky Digital Library is a statewide resource whose infrastructure is managed by the University of Kentucky's Digital Library Services. KDL also serves as regional hub for the Digital Public Library of America. These guidelines are intended to support the aim of providing technological guidance to the diversity of participating cultural heritage institutions whose unique collections comprise the KDL. In turn, well-formed and consistent metadata will support effective long-term preservation, enhance discovery and improve interoperability. Ultimately, good metadata helps users by making sure Kentucky's digitized cultural heritage collections are accessible and searchable, now and in the future.

###### **Specifically, these guidelines are designed to:**
- cover basic metadata principles and best practices
- increase transparency by describing KDL's workflows and processes regarding metadata
- provide specifications and practical examples for descriptive metadata fields
- facilitate effective reuse of existing descriptions already created by contributors, such as cataloging records and finding aids 

### 1.1 Metadata Overview

Robust models for describing digital objects categorize metadata as either descriptive, administrative and structural. While useful, these categories can overlap in several areas if they are not further defined. KDL generates much of the administrative and structural metadata describing objects and collections through automated processes. On the other hand, KDL believes contributors know their own collections best, and KDL depends on them to provide descriptive metadata that will best facilitate discovery. At the same time, contributed metadata should adhere to best practices where at all possible in order to make the most of KDL's existing infrastructure and any systems that rely on KDL's data, such as the Digital Public Library of America (DPLA).

These guidelines are designed in the effort to balance the diversity of descriptions associated with contributed collections and the technical needs of systems that rely on KDL data, such as the DPLA. In practice, KDL largely consists of material contributed by special collections and archives and has made every effort to incorporate aspects of standards appropriate to those collections, especially Describing Archives: A Content Standard (DACS) and Encoded Archival Description (EAD). KDL recognizes three levels of "required-ness" across descriptive metadata fields -- required, required if available and recommended. It also includes recommended fields specific to collection level records that make best use of existing finding aids.

###### **Required fields must be submitted in order for content to be ingested:**
- format
- Kentucky-specific subject
- language
- resource type
- rights
- title

###### **Required if available**
- creator
- date
- source

###### **Recommended**

KDL describes a number of additional fields that map to common description and cataloging standards. We highly recommend that contributors submit all fields appropriate to existing descriptive metadata that may have previously been collected in finding aid, accession record or catalog record by contributing institution.

**Collection level**

KDL provides a number of recommended fields specific to collection level records in order to capture information contained in finding aids that may not be appropriate for item level records.

### 1.2 Clarifications 

**Items and Collections**

There are two types of records that may be entered: those that describe individual items and those that describe collections of items. Fields that only pertain to collections appear in the recommended fields section and generally include information that would appear in a finding aid.

**Source Material**

In the case of digitized collections as opposed to born-digital materials, the metadata fields as they are construed here privilege the source material. While the fields descriptions in the following section should make that explicit, occasionally ambiguity may arise, in which case contributors should opt for descriptions of the original source material.

**Character Encoding**

KDL encodes metadata records using UTF-8 character encoding, which supports a range of foreign characters. We encourage contributors to adhere as closely to information as it appears on the original record, for example, including accented characters in the title of records or the names of contributors.

**Dates**

To enhance discoverability and automated maintenance processes, KDL requires the use of ISO 8601 for the entry of the most date fields; in other words, KDL uses the standard form of YYYY-MM-DD. This is used in Date, Terminal Date, Date Range Start and Date Range End fields.

Dates appear in other fields as well, and we encourage the strict use of the same format where applicable. In practice, this will usually be to indicate a year (YYYY) or range of years (YYYY-YYYY). A question mark(?) to indicate uncertainty and a tilde(~) to indicate an approximate date can be placed immediately before a year (~1800-?1900). 

While free text dates may appear in many fields, they most commonly appear in Creator, Contributor, Temporal Coverage, Collection Label, Series Statement and Bulk Date fields

**Authority Lists and Controlled Vocabulary**

Wherever possible we encourage authority lists and controlled vocabulary over free text submission in order to enhance discoverability and interoperability. In addition to Library of Congress Authorities and the Getty Art and Architecture Thesaurus, KDL maintains a number of subsets specific to Kentucky related collections. In the case of Kentucky-specific subsets of broader standards, options will appear in drop down menus in the metadata editor.

## 2 Data Fields

### 2.1 How to Use this Manual

###### Descriptive metadata fields submitted by contributors appear below with the following fields:
- **Title /** human-readable title of the field
- **Repeatable /** whether the field can be used multiple times or whether it is unique to an item
- **Scheme /** how data should be inputted, whether entering free  unstructured text or entering values according to an authority list
- **Qualifier /** whether qualifiers are available to distinguish field elements
- **Definition /** a succinct definition of the field's intended use, largely taken from Dublin Core guidelines but further specified for use by KDL
- **Usage Guidelines /** notes on how to use the field and issues that may come up in practice
- **Examples /** examples taken from the KDL of successful fields
- **Resources /** links to external resources relevant to the field
</ul>
Note that crosswalks for each field appear in Appendix A.

### 2.2 Required Fields

#### Account Information

In addition to descriptive metadata fields, KDL requires repositories to provide basic account information in order to facilitate contributors editing metadata and uploading content.

The required information for repository accounts are:

**Abstract:** A succinct description of the contributing repository to appear online alongside contributed materials

**Department:** The name of the institutional department in custody of the collections published online

*Institutional Contact Information to appear alongside online collections*
**Street Address:** Physical location of the contributed collections
**Email:** An institutional email address for the repository for directing reference requests and other collection-specific queries
**URL:** A stable web address linking to the contributing institution

*Depositor Contact Information for internal use should KDL need to contact the person responsible for contributing material*
**Depositor name**
**Depositor email address**

#### Format

**Repeatable:** No

**Scheme:** AAT

**Definition:** The file format or physical medium of the present resource

**Usage Guidelines:**
- When using the metadata editor, Format choices will appear as options in a selectable drop down menu. 
- KDL uses a custom subset of Getty AAT. See Resources below.
- In the case of digitized resources, Format refers to the analog source.

**Examples:** Books, Diaries, [mixed materials]

**Resources:**

[KDL Format Authority List](http://www.uky.edu/~eweig/kdl_metadata_2013/kdl_metadata_2013_dcmiformat.xsd)

[Getty AAT](http://www.getty.edu/research/tools/vocabularies/aat/index.html)

#### Language

**Repeatable:** Yes

**Scheme:** ISO 639

**Definition:** The language of the intellectual content of the present resource

**Usage Guidelines:** 
- When using the metadata editor, Language choices will appear as options in a selectable drop down menu.
- The Language should be indicated by the two-letter code where available or the three-letter code, if the two-letter is unavailable.

**Examples:** en, es

**Resources:** [ISO 639](http://www.loc.gov/standards/iso639-2/php/code_list.php)

#### Resource Type

**Repeatable:** No

**Scheme:** DCMI Type Vocabulary

**Definition:** The functions, genres or aggregation levels for the content of the resource

**Usage Guidelines:**
- When using the metadata editor, Resource Type choices will appear as options in a selectable drop down menu.
- The Resource Type corresponds to those described by the Dublin Core Type Vocabulary.
 
**Examples:** Collection, Text, StillImage

**Resources:**
[DCMI Type Vocabulary](http://dublincore.org/documents/dcmi-type-vocabulary/#H7)

#### Rights

**Repeatable:** No

**Scheme:** Free text

**Definition:** An identifier that links to a rights management statement or to a service providing information about rights management

**Usage Guidelines:**
- Contributors can include a statement and/or a URL appropriate to that institution's policies.
- If no institution-specific rights statement is included, KDL's default rights statement will be used.

**Examples:** 

Default / This digital resource may be freely searched and displayed. Permission must be received for subsequent distribution in print or electronically.  Physical rights are retained by the owning repository. Copyright is retained in accordance with U. S. copyright laws. Please go to http://kdl.kyvl.org for more information.

#### Title

**Repeatable:** No

**Scheme:** Free text

**Qualifier(s):** Alternate

**Definition:** An identifying and/or descriptive name given to the resource

**Usage Guidelines:** 
- Input the title exactly as it appears as it appears, including punctuation and foreign characters.
- The title should be the name by which the resource is formally known, typically given by the creator.
- If no title exists, please provide a succint description of the resource, if possible constructed according to DACS. Only use "Untitled" in cases where that is the designated title. 
- If more than one title exists, additional title fields should be designated by the qualifier "alternate".

**Examples:**

Formal / "Why Blood Flows in Harlan," The Literary Digest, December 5, 1931

Supplied / Group portrait of Elmendorf students, with teacher Ella Ford, standing in front of school located off Paris Pike.

**Resources:** 

[Describing Archives: A Content Standard](http://files.archivists.org/pubs/DACS2E-2013.pdf)

### 2.3 Required If Available

#### Creator

**Repeatable:** Yes

**Scheme:** LC Name Authority Headings (recommended), Free text

**Definition:** The person, agency or organization primarily responsible for creating the intellectual content of the resource

**Usage Guidelines:** 
- In the case of an individual, begin with the creator's last name followed by the first, separated by a comma.
- In case of ambiguity, include the name exactly as it appears in the resource.
- Include birth and death dates where applicable.
- In the case of corporate entities, use the name exactly as it appears in the resource.
- Wherever possible, use the form of names as they appear in the Library of Congress Name Authority Headings.

**Examples:** 

Individual Creator / Brezing, Belle, 1860-1940

Corporate Creator / University of Kentucky. College of Agriculture. Agricultural Experiment Station

**Resources:** [Library of Congress Name Authority Headings](http://authorities.loc.gov/)

#### Date

**Repeatable:** No

**Scheme:** ISO 8601 (YYYY-MM-DD)

**Definition:** The date when the the present resource was created, or in the case of digitized objects, when the analog source was created

**Usage Guidelines:**
- When using the metadata editor, this field will be entered using the drop down calendar.
- When only a year is available, please format the date [year]-01-01.
- When an item is described by a date span, please enter the earliest date. 
- Items require a single date in order to facilitate effective, faceted search across digital collections, which may give rise to ambiguity. Other date fields that appear under Recommended Fields can be used to further describe items.

**Examples:** 1848-01-01

**Resources:**
[ISO 8601](http://www.w3.org/TR/NOTE-datetime)

#### Kentucky Topic

**Repeatable:** Yes

**Scheme:** KDL Kentucky Subject Headings

**Definition:** Topic headings related to Kentucky history that describe the intellectual content of the resource

**Usage Guidelines:**
- Select Kentucky specific topic(s) as indicated on KDL's Kentucky subject headings list. 
- If using the metadata editor, these options appear in a drop down list.
 
**Examples:** African American history, Appalachia, Coal Mining

**Resources:**

[KDL Kentucky Subject Headings](http://www.uky.edu/~eweig/kdl_metadata_2013/kdl_metadata_2013_dcmisubject.xsd)

#### Source

**Repeatable:** No

**Scheme:** A formal identifier (recommended), Free text

**Definition:** An unambiguous reference to the resource from which the present resource is derived

**Usage Guidelines:**
- In practice, the source is often the title for the collection of which the present resource is a member.
- The source may also be a formal identifier (e.g., URI, ISBN, ISSN or accession number).
- The source is not applicable to most born-digital objects, that is, objects that are not derivatives of other resources. 

**Examples:** 

Collection title / Herndon J. Evans Collection

Formal / ISBN: 0613685725, Accession Number: 2009MS189

### 2.4 Recommended

#### Container List

**Repeatable:** No

**Scheme:** Controlled vocabulary, Free text

**Definition:** A list of up to three containers (with identifiers) indicating an item's physical arrangment within a collection.

**Usage Guidelines:** 
- This field allows item level records to indicate a physical location within the contributing institution's holdings.
- This field can facilitate the construction of an EAD record from descriptive metadata.

**Example:** Box 1, Carton 3, Drawer 6

**Resources:**

[Encoded Archival Description](http://www.loc.gov/ead/tglib/element_index.html)

#### Contributor

**Repeatable:** Yes

**Scheme:** LC Name Authority Headings (recommended), Free text

**Definition:** The person, agency or organization that contributed significantly or played an important role in creating the intellectual content of the resource other than the creator

**Usage Guidelines:** 
- In the case of an individual, begin with the creator's last name followed by the first, separated by a comma.
- In case of ambiguity, include the name exactly as it appears in the resource.
- Include birth and death dates where applicable.
- In the case of corporate entities, use the name exactly as it appears in the resource.
- Wherever possible, use the form of names as they appear in the Library of Congress Name Authority Headings.

**Examples:** 

Individual Contributor / Brezing, Belle, 1860-1940

Corporate Contributor / University of Kentucky. College of Agriculture. Agricultural Experiment Station

**Resources:** [Library of Congress Name Authority Headings](http://authorities.loc.gov/)

#### Description 

**Repeatable:** No

**Scheme:** Free text

**Definition:** An account of the physical or intellectual properties of the present resource

**Usage Guidelines:**
- This field allows contributors to include a succinct, relevant summary or abstract that will aid search and discovery of the present resource.
- The resources below link to content standards that describe appropriate structures for descriptive and summative notes. 

**Examples:** 

**Resources:**

[Encoded Archival Description](http://www.loc.gov/ead/tglib/element_index.html)

[Describing Archives: A Content Standard](http://files.archivists.org/pubs/DACS2E-2013.pdf)

#### Geographic Coverage 

**Repeatable:** Yes

**Scheme:** Controlled vocabulary

**Definition:** Kentucky specific place names relevant to the intellectual content of the present resource

**Usage Guidelines:**
- Choose relevant geographic locations from the subset list of LCSH subject headings referring to Kentucky's political boundaries.
- When using the metadata editor, options appear in a drop down menu.

**Examples:** World -- North and Central America -- United States -- Kentucky -- Lexington

**Resources:** [KDL Kentucky Place Names](http://www.uky.edu/~eweig/kdl_metadata_2013/kdl_metadata_2013_dcmicoverage.xsd)

#### LCSH Subject

**Repeatable:** Yes

**Scheme:** LCSH

**Definition:** The subjects, topics or keywords describing the intellectual content of the resource

**Usage Guidelines:**
- In practice, descriptive metadata fields can be used as subjects. The values entered for Creator, Contributor, Spatial Coverage and/or Date Range can also be entered as values for the Subject field.
- Where appropriate, include subjects from the following authority lists: LCSH, TGM I and TGM II. Ideally, these subject strings can be reused from existing records such as finding aids or MARC records.
 
**Examples:** 

Creator as subject / 
Brezing, Belle, 1860-1940

University of Kentucky. College of Agriculture. Agricultural Experiment Station

LCSH / Botany--Kentucky--Lexington

Entomology--Kentucky--Lexington

**Resources:**

[Library of Congress Subject Authority Headings (LCSH)](http://authorities.loc.gov/)

#### Publisher

**Repeatable:** No

**Scheme:** Free text

**Definition:** Name of the person or organization responsible for making the resource available

**Usage Guidelines:**
- The publisher may be a formal publishing house or agency, as in the case of a book or newspaper.
- The publisher may also be a corporate entity, for example, the name of the university department, professional association or company.
 
**Examples:** Harper Collins, University of Kentucky College of Agriculture, The McClatchy Company

**Resources:**

[Dublin Core: Publisher](http://purl.org/dc/elements/1.1/publisher)

#### Relation

**Repeatable:** Yes

**Scheme:** URI (recommended), ARK identifier, Accession number, ISBN

**Qualifier(s):** Is Version Of, Has Version, Is Replaced By, Replaces, Is Required By, Requires, Is Part Of, Has Part, Is Referenced By, References, Is Format Of, Has Format 

**Definition:** A formal string identifier for another resource such as collection or item to which the present resource is related

**Usage Guidelines:**
- This field is intended to provide a way of indicating a machine readable reference to another resource.
- Requires the use of a Dublin Core Relation qualifier to specify the relationship between the resources.

**Examples:** isPartOf: ark:/xt7ht727b08t, isVersionOf: ISBN 0613685725

**Resources:**

[Dublin Core Terms: Relation](http://purl.org/dc/terms/relation)

#### Retention 

**Repeatable:** No

**Scheme:** Controlled vocabulary

**Definition:** Either Temporal or Preservation -- whether the resource is intended to be preserved or whether there is a terminal date at which point it should be deaccessioned

**Usage Guidelines:**
- KDL's preservation infrastructure involves different maintenance routines depending on whether a record is intended for preservation or for temporary storage 
- If using the metadata editor, choose preservation or temporal from the drop down menu.

**Resources:** [KDL Retention Schedule List](http://www.uky.edu/~eweig/kdl_metadata_2013/kdl_metadata_2013_retention.xsd)

#### Series Statement 

**Repeatable:** No

**Scheme:** Free text

**Definition:** A label designating the intellectual series of an archival collection as indicated by its finding aid to which the present belongs

**Usage Guidelines:**
- Enter the series title exactly as it appears within the contributing institutions internal catalog.
- This field enhances discoverability by providing intellectual context to item level records.

**Examples:** Correspondence, Financial documents, Ephemera

**Resources:** [EAD<series\>](http://www.loc.gov/ead/tglib/elements/seriesstmt.html)

#### Spatial Coverage

**Repeatable:** Yes

**Scheme:** WGS 84

**Definition:** Geospatial coordinates relevant to the intellectual content of the present resource

**Usage Guidelines:** Latitude and longitudinal coordinates should describe the most specific geographic location available in order to best make use of spatial information.

**Resources:** World Geodetic System (WGS 84)

#### Terminal Date

**Repeatable:** No

**Scheme:** ISO 8601 (YYYY-MM-DD)

**Definition:** The calendar date after which a digital record is intended to be deaccessioned

**Usage Guidelines:**
- If temporal was chosen for the retention option, a drop down calendar will appear for when the resource should no longer be preserved.

**Resources:** [ISO 8601](http://www.w3.org/TR/NOTE-datetime)

### 2.5 Collection Level Fields

The following fields refer to finding aid specific descriptive information at the collection level. The fields are largely derived from the best practices described by [DACS](http://files.archivists.org/pubs/DACS2E-2013.pdf) and [EAD](http://www.loc.gov/ead/tglib/element_index.html). Where indicated, the following definitions are summarized from the Encoded Archival Description Tag Library, 2002.

#### Abstract

A very brief summary of the materials being described, used primarily to encode bits of biographical or historical information about the creator and abridged statements about the scope, content, arrangement, or other descriptive details about the archival unit or one of its components.

**Resources:** [EAD <abstract\>](http://www.loc.gov/ead/tglib/elements/abstract.html)

#### Accruals

Information about anticipated additions to the materials being described. Can indicate quantity and frequency. Can also be used to indicate that no additions are expected.

**Resources:** [EAD <accruals\>](http://www.loc.gov/ead/tglib/elements/accruals.html)

#### Arrangement

Information on how the described materials have been subdivided into smaller units, e.g., record groups into series, identifying the logical or physical groupings within a hierarchical structure.

**Resources:** [EAD <arrangement\>](http://www.loc.gov/ead/tglib/elements/arrangement.html)

#### Biography or History

A concise essay or chronology that places the archival materials in context by providing information about their creator(s). 

**Resources:** [EAD <bioghist\>](http://www.loc.gov/ead/tglib/elements/bioghist.html)

#### Bulk Date

The date or dates describing the predominant date range during which records in a collection were created. This is useful when there is a significant discrepancy between the earliest or latest records and the bulk of record creation.

This date is entered as free text and can be a date (YYYY-MM-DD), a year (YYYY) or span of years (YYYY-YYYY).

#### Collection Label

**Repeatable:** No

**Scheme:** Free text

**Definition:** The human-readable label for the collection of which the resource is a part. 

**Usage Guidelines:**
- This field is provided as a convenience to contributing repositories to allow users to identify an item as part of a collection especially when a formal identifier such as an accession number or ISBN is unavailable.
- Use the title of the collection as it appears within internal catalog of the contributing repository.

**Examples:** Abraham Haptonstall Legal Documents, 1788-1806, Abe Thompson photograph album

#### Collection Level Relation 

**Repeatable:** No

**Scheme:** URI (recommended), ARK identifier, Accession number, Free text
 
**Definition:** A formal string identifier for another resource such as collection or item to which the present resource is related

**Usage Guidelines:**
- This field is intended to provide a way of indicating a machine readable reference to another resource, specifically that it is part of a collection.
- When using the metadata editor, options appear in a drop down menu based on the collection level records submitted for the contributing repository.

**Examples:** ark:/xt7ht727b08t, Accession Number: 1984ua004

**Resources:**

[Dublin Core Terms: isPartOf](http://purl.org/dc/terms/isPartOf)

#### Conditions Governing Reproduction and Use

Information about conditions that affect the availability of the materials being described.

**Resources:** [EAD <accessrestrict\>](http://www.loc.gov/ead/tglib/elements/accessrestrict.html)

#### Custodial History

Information about the chain of ownership of the materials being described, before they reached the immediate source of acquisition.

**Resources:** [EAD <custodhist\>](http://www.loc.gov/ead/tglib/elements/custodhist.html)

#### Date Range Start and Date Range End

The date of the earliest record's creation and the latest record's creation. As with other dates, these should take the form of YYYY-MM-DD according to ISO 8601.

#### Extent

Information about the quantity of the materials being described or an expression of the physical space they occupy. In practice, this usually involves traditional archival units of measurement such as linear or cubic feet, boxes, cartons or cases. It may also include the number of individual items, such as photographs or film reels.

**Resources:** [EAD <extent\>](http://www.loc.gov/ead/tglib/elements/extent.html)

#### Note

A short statement explaining the text, indicating the basis for an assertion, or citing the source of a quotation or other information. Used both for general comments and as an annotation for the text in a finding aid. Should not be used in cases where a more specific tag would suffice. 

**Resources:** [EAD <note\>](http://www.loc.gov/ead/tglib/elements/note.html)

#### Physical Access

Information identifying the place where the described materials are stored, such as the name or number of the building, room, stack, shelf, or other tangible area.

**Resources:** [EAD <physloc\>](http://www.loc.gov/ead/tglib/elements/physloc.html)

#### Scope and Content Note

A prose statement summarizing the range and topical coverage of the described materials, often mentioning the form and arrangement of the materials and naming significant organizations, individuals, events, places, and subjects represented. 

**Resources:** [EAD <scopecontent\>](http://www.loc.gov/ead/tglib/elements/scopecontent.html)

#### Source of Acquisition

The immediate source of the materials being described and the circumstances under which they were received. Includes donations, transfers, purchases, and deposits.

**Resources:** [EAD <acqinfo\>](http://www.loc.gov/ead/tglib/elements/acqinfo.html)

#### Technical Access

A description of important physical conditions or characteristics that affect the storage, preservation, or use of the materials described.

**Resources:** [EAD <phystech\>](http://www.loc.gov/ead/tglib/elements/phystech.html)

## Appendix A: Ingest Processes Overview

Once a project is actively being processed, digital objects undergo a number of steps so that when files are later retrieved KDL can ensure they are complete and have not been unintentionally modified. KDL models its system after the Open Archives Initiatives System (OAIS) which, roughly speaking, divides preservation into three stages: submission, archiving and dissemination. At each stage, a packet of information including metadata and data files is generated and passed onto the next for further processing.

Metadata is actually served as JSON files that can later be reassembled according to whatever structure is necessary. This facilitiates reuse by multiple systems because no rigid structure is implied. For example, metadata can be recombined and structured to meet different requirements, such as DPLA's metadata harvester or a DACS compliant EAD.

**1 Submission**

Data files, paired with basic descriptive information such as format, are put into an ingest queue, something like a bulletin board listing upcoming projects.

**2 SIP**

The first stage of processing is creating a Submission Information Packet (SIP). Files are copied into a workspace and associated with appropriate administrative and structural metadata. Files might be further processed, for example, images of printed text might be scanned using Optical Text Recognition (OCR). 

**3 Identifiers**

The data, metadata and any derivative files are then packaged and given unique identifiers. The Archival Information Packet(AIP) identifier will accompany the package of information that will be archived and stored without being accessed. The Dissemination Information Packet(DIP) identifier will accompany the package of information that will be stored on the server accessed by KDL's online interface.

**4 Approval**

Before being archived or moved to access storage, packages undergo testing to make sure that files and metadata are complete.

**5 Storage**

Lastly, packages are moved to their appropriate servers and a version of the metadata is added to KDL's index. Archival packages are secure within a preservation repository and dissemination packages are now searchable online. Any temporary files are cleaned up and the process can begin again.   

## Appendix B: Crosswalks


<table><tr class='rShim'><td class='rShim' style='width:0;'><td class='rShim' style='width:174px;'><td class='rShim' style='width:120px;'><td class='rShim' style='width:120px;'><td class='rShim' style='width:120px;'><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s0'>Field Title<td  dir='ltr' class='s1'>DC<td  dir='ltr' class='s1'>EAD<td  dir='ltr' class='s1'>MARC</tr><tr dir='ltr'><td class=hd></td><td  class='s2'><td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s3'>required fields<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>format<td  dir='ltr' class='s5'>dc:format<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>Kentucky-specific subject<td  dir='ltr' class='s5'>dc:subject<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>language<td  dir='ltr' class='s5'>dc:language<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>resoure type<td  dir='ltr' class='s5'>dcterms:type<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>rights<td  dir='ltr' class='s5'>dc:rights<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>title<td  dir='ltr' class='s5'>dc:title<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  class='s2'><td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s3'>required if available<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>creator<td  dir='ltr' class='s5'>dc:creator<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>date<td  dir='ltr' class='s5'>dc:date<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>source<td  dir='ltr' class='s5'>dc:source<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  class='s2'><td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s3'>recommended<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>collection label<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>collection level relation<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>container 1<td ><td  dir='ltr' class='s5'>c01<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>container 2<td ><td  dir='ltr' class='s5'>c02<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>container 3<td ><td  dir='ltr' class='s5'>c03<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>contributor<td  dir='ltr' class='s5'>dc:contributor<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>description<td  dir='ltr' class='s5'>dc:description<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>file format<td  dir='ltr' class='s5'>dc:format<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>geographic coverage<td  dir='ltr' class='s5'>dc:subject<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>LCSH subject<td  dir='ltr' class='s5'>dc:subject<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>publisher<td  dir='ltr' class='s5'>dc:publisher<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>relation<td  dir='ltr' class='s5'>dc:relation<td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>retention<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>series statement<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>spatial coverage<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>terminal date<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  class='s2'><td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s3'>collection level<td ><td ><td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>abstract<td  dir='ltr' class='s5'>dcterms:abstract<td  dir='ltr' class='s5'>abstract<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>accruals<td ><td  dir='ltr' class='s5'>accruals<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>arrangement<td ><td  dir='ltr' class='s5'>arrangment<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>biography or history<td  dir='ltr' class='s5'>dc:description<td  dir='ltr' class='s5'>bioghist<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>bulk date<td ><td  dir='ltr' class='s5'>date<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>conditions governing reproduction and access<td ><td  dir='ltr' class='s5'>accessrestrict<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>custodial history<td ><td  dir='ltr' class='s5'>custodhist<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>date range end<td  dir='ltr' class='s5'>dcterms:temporal<td  dir='ltr' class='s5'>date<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>date range start<td  dir='ltr' class='s5'>dcterms:temporal<td  dir='ltr' class='s5'>date<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>extent<td  dir='ltr' class='s5'>dcterms:extent<td  dir='ltr' class='s5'>extent<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>note<td  dir='ltr' class='s5'>dc:description<td  dir='ltr' class='s5'>note<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>physical access<td  dir='ltr' class='s5'>dc:description<td  dir='ltr' class='s5'>physloc<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>scope and content note<td  dir='ltr' class='s5'>dc:description<td  dir='ltr' class='s5'>scopecontent<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>source of acquisition<td  dir='ltr' class='s5'>dc:description<td  dir='ltr' class='s5'>acqinfo<td ></tr><tr dir='ltr'><td class=hd></td><td  dir='ltr' class='s4'>technical access<td  dir='ltr' class='s5'>dc:description<td  dir='ltr' class='s5'>phystech<td ></tr></table>
