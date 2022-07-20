---
title: Title
tags: [tag1, tag2]
---

import Photo from '/src/components/Photo'
import Gallery from '/src/components/Gallery'
import Map from '/src/components/Map'

TKTK

<!-- truncate -->

TKTK

<Photo photo={require('./photos/{POST_DIR}/IMG_1.jpg')} />

TKTK

<Gallery photos={[
require('./photos/{POST_DIR}/IMG_2.jpg'),
require('./photos/{POST_DIR}/IMG_3.jpg'),
require('./photos/{POST_DIR}/IMG_4.jpg'),
]} />

<Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14871.124384694827!2d-157.83269825!3d21.28013095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df4e5c129af%3A0x4633ddc52a688878!2sWaikiki%2C%20Honolulu%2C%20HI%2096815%2C%20USA!5e0!3m2!1sen!2scz!4v1658352895153!5m2!1sen!2scz" />
