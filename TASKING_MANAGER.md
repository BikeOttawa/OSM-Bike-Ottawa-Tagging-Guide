### OSM Bike Ottawa Guide

- [https://github.com/osmottawa/OSM-Bike-Ottawa-Tagging-Guide](https://github.com/osmottawa/OSM-Bike-Ottawa-Tagging-Guide)

### LTS Scheme

- [https://docs.google.com/document/d/1GUjh7mXMvU8DuqyOxof6IMYdlEgGU5Y0-oyUhw3TlHE](https://docs.google.com/document/d/1GUjh7mXMvU8DuqyOxof6IMYdlEgGU5Y0-oyUhw3TlHE)

### Physically Separated

#### Yes

- `cycleway`=`lane` IF [`buffer`]=`yes`
- `cycleway`=`opposite_lane` IF [`buffer`]=`yes`
- `highway`=`cycleway`
- `highway`=`footway`
- `highway`=`path`
- `shoulder`=`service_strip` IF `width` ≥ `1m`
- `path`=`desire`

### No

- `cycleway`=`lane`
- `cycleway:middle`=`lane`
- `cycleway:right`=`lane`
- `cycleway`=`opposite_lane` (IF [`buffer`]=`no` OR unspecified)
- `cycleway`=`share_busway`
- `sharrows`=`left/right/both`
- `shoulder:left/right/both` AND [`surface`]=`yes`
- `sidewalk:left/right/both:bicycle`=`yes`
- `shoulder`=`service_strip` IF `width` < `1m`

### Parking

- `parking:lane:left`
- `parking:lane:right`
- `parking:lane:both`

Possible values: `parallel`, `marked`, `no_stopping`, `no_parking`, `fire_lane`

More description of parking tags: [https://wiki.openstreetmap.org/wiki/Key:parking:lane#Parking_position](https://wiki.openstreetmap.org/wiki/Key:parking:lane#Parking_position)

### Lanes

Lanes for motor vehicles:

- `lanes`=`2`

For the bike lane, add-on:

- `cycleway`=`left/right/both`

Lane guidance: [https://wiki.openstreetmap.org/wiki/Key:lanes#Examples](https://wiki.openstreetmap.org/wiki/Key:lanes#Examples)