# OSM Bike Ottawa Tagging Guide

<a href="#Lanes">Lanes</a><br>
<a href="#Plowing">Plowing</a><br>
<a href="#Flooding">Flooding</a><br>
<a href="#Optional tags">Optional tags</a><br>
<a href="#Parking">Parking</a><br>
<a href="#Lane configuration">Lane configuration</a><br>
<a href="#Other tags for ways not shown">Other tags for ways not shown</a><br>
<a href="#Points of Interest (Nodes)">Points of Interest (Nodes)</a><br>
<a href="#Intersections and other Road Crossings">Intersections and other Road Crossings</a><br>
<a href="#Filtered Permeability and Pinch-Points">Filtered Permeability and Pinch-Points</a><br>
<a href="#Forced Dismounts">Forced Dismounts</a><br>

<h2><a id="Lanes"> Lanes </a></h2>

| Feature                                                         | OSM Scheme                | Photos     |
|-----------------------------------------------------------------|---------------------------|------------|
| <b>Paved Multi-Use Path (MUP)</b><br> Typically 3m wide, may be wider. Intended for mixed bike and foot traffic                                            | [highway][highway]=[path][path] <br> [surface][surface]=[asphalt][asphalt]| [![image](https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.392085481388904&lng=-75.70190062722224&z=17&focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ)
| <b>Twinned Path</b><br> Typically >4.5 m wide. Intended for separated bike and foot traffic                                            | [highway][highway]=[path][path] <br> [surface][surface]=[asphalt][asphalt] <br> [segregated]=yes| [![image](https://d1cuyjsrcm0gby.cloudfront.net/J5eakBF0yAOttLLsGtnkcg/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.392085481388904&lng=-75.70190062722224&z=17&focus=photo&pKey=J5eakBF0yAOttLLsGtnkcg)
| <b>Walkway</b><br> Typically <3m wide. May not have curb cuts. Intended primarily for foot traffic, though bikes are not prohibited|   |[![image](https://d1cuyjsrcm0gby.cloudfront.net/fMftKPCR90gDvxZ_3q3V5w/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.392085481388904&lng=-75.70190062722224&z=17&focus=photo&pKey=fMftKPCR90gDvxZ_3q3V5w)
| <b>Unpaved Multi-Use Path (MUP)</b><br> Typically 3m wide. Intended for mixed bike and foot traffic. Often a stonedust  surface, but sometimes dirt.                                              | [highway][highway]=[path][path] <br> [surface][surface]=[fine_gravel][fine_gravel] | [![image](https://d1cuyjsrcm0gby.cloudfront.net/0y0R2Fs6pv3KvTgCEYPabw/thumb-1024.jpg)](https://www.mapillary.com/app/?lat=45.14111679972223&lng=-75.61085714944443&z=17&focus=map&pKey=0y0R2Fs6pv3KvTgCEYPabw)
| <b>One way protected lanes</b><br>  Also known as cycletracks. Separated from the roadway, pedestrians not permitted.         | [highway]=[cycleway][highway_cycleway] <br> oneway=yes | [![image](https://d1cuyjsrcm0gby.cloudfront.net/GSkPP_J3o-ILEkeoMJMl0A/thumb-1024.jpg)](https://www.mapillary.com/map/im/GSkPP_J3o-ILEkeoMJMl0A)
| <b>Bi-directional protected cycletrack</b><br>  Separate way for the cycletrack.      | [highway]=[cycleway][highway_cycleway]<br>oneway=no | [![image](https://d1cuyjsrcm0gby.cloudfront.net/1xOyTkegYkMF9SapKrqAnQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/1xOyTkegYkMF9SapKrqAnQ)
| <b>Buffered bike lane</b><br> The bike lane and roadway share a continuous surface, but are separated by treatments that may include: jersey barriers, planters, flex stakes, double paint line          |  [cycleway][cycleway] = lane <br> cycleway:[buffer][buffer] = yes | [![image](https://d1cuyjsrcm0gby.cloudfront.net/sCskYIeAaVOrs6pOvUVddQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/sCskYIeAaVOrs6pOvUVddQ)
| <b>Painted bike lane, on a divided road</b><br> A single line of paint delineates the bike lane. Bike symbol may be painted in the lane. The lane is reserved for bikes by posted signage.   | [cycleway][cycleway]:right=lane  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/IbjORAYAgVQk5oUto7WgsQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/IbjORAYAgVQk5oUto7WgsQ)
| <b>Painted bike lane, on an undivided road</b><br> A single line of paint delineates the bike lane. Bike symbol may be painted in the lane. The lane is reserved for bikes by posted signage.                            | [cycleway][cycleway] = lane |[![image](https://d1cuyjsrcm0gby.cloudfront.net/3Me8bNEXV5Tkr3OhsLO6Ow/thumb-1024.jpg)](https://www.mapillary.com/map/im/3Me8bNEXV5Tkr3OhsLO6Ow)
| <b>Shoulder, not signed as a bike lane</b><br> A single line of paint delineates the shoulder. No signage or bike symbols present. Parking on the shoulder is typically permitted.                             | [shoulder]:left/right/both <br> shoulder:surface=yes/no  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/wYO6exNSPsFQM7nZblFMAQ/thumb-1024.jpg)](https://www.mapillary.com/app/?focus=photo&pKey=wYO6exNSPsFQM7nZblFMAQ&lat=45.270994444444455&lng=-75.79611111111109&z=17)
| <b>Contraflow lane</b><br> On one-way streets, a yellow line allows two-way bike traffic.                                                 | [cycleway]=opposite_lane  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/cW35TfHANRe5DWbbxABJlw/thumb-1024.jpg)](https://www.mapillary.com/map/im/cW35TfHANRe5DWbbxABJlw)
| <b>Advisory bike lane</b><br> Dashed lines delineate bike lanes on each side of the street. The remaining roadway is too narrow for two-way motor traffic. Motorists may enter the bike lanes when encountering an oncoming vehicle, but must give priority to cyclists. |     |[![image](https://d1cuyjsrcm0gby.cloudfront.net/ok7p-w_Ej9nIG-S9eKK8pg/thumb-1024.jpg)](https://www.mapillary.com/map/im/ok7p-w_Ej9nIG-S9eKK8pg)|
| <b>Shared bus/bike lane</b><br> Cyclists will often have these lanes to themselves, but sometimes will need to navigate amidst buses. Designated by signage. | [cycleway]=[share_busway]  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/PqTQqISWgK5QbWg5PRvaQA/thumb-1024.jpg)](https://www.mapillary.com/map/im/PqTQqISWgK5QbWg5PRvaQA)
| <b>Shared sidewalk (signed)</b><br> A standard sidewalk, sharing designated by signage. Surface is often concrete, rather than asphalt.  |    |   [![image](https://d1cuyjsrcm0gby.cloudfront.net/ZP4d2yqBwWWlfbixrztDzA/thumb-1024.jpg)](https://www.mapillary.com/map/im/ZP4d2yqBwWWlfbixrztDzA)  |
| <b>Dooring zone</b><br> Unique in Ottawa. Painted warning that cyclists should avoid riding close to parked vehicles. |  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/kl9e_LG76Fvzom8PycQHAQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/kl9e_LG76Fvzom8PycQHAQ)
| <b>Super sharrows</b><br> Green backgound for enhanced visibility. Indicates lane position cyclists should use on roads where no cycling infrastructure is present.| sharrows=left/right/both|[![image](https://d1cuyjsrcm0gby.cloudfront.net/Ai2jtWC-HyicF8V_NWbUcA/thumb-1024.jpg)](https://www.mapillary.com/map/im/Ai2jtWC-HyicF8V_NWbUcA)|
| <b>Sharrows</b><br> Bike symbol indicates lane position cyclists should use on roads where no cycling infrastructure is present. Require frequent re-painting and may be very faded; it's still of interest to know which roads are intended to have sharrows. | sharrows=left/right/both| [![image](https://d1cuyjsrcm0gby.cloudfront.net/d-l1qlsZsdb1vJWyeIVeDw/thumb-1024.jpg)](https://www.mapillary.com/map/im/d-l1qlsZsdb1vJWyeIVeDw)|
| <b>Traffic-calming parking lane</b><br>Resembles a bike lane or paved shoulder, but is typically narrow and includes a curb. Intended to visually narrow the road and calm traffic speeds. Not specifically intended for cycling, but may be functional. Parking is typically permitted. |  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/AFnTWKXGzqrIFqDCHRUOcg/thumb-1024.jpg)](https://www.mapillary.com/map/im/AFnTWKXGzqrIFqDCHRUOcg)
| <b>Service strip</b><br> Asphalt strip, resembles a cycletrack, but is typically narrow and in poor condition, with no intersection treatments, and may include utility poles. Intended as a low-maintenance surface for snow storage. Not specifically intended for cycling, but may be functional. |  |[![image](https://d1cuyjsrcm0gby.cloudfront.net/s-IPpAUVbDsSPyDYNceg3Q/thumb-1024.jpg)](https://www.mapillary.com/map/im/s-IPpAUVbDsSPyDYNceg3Q)
| <b>Desire line</b><br> Well-worn path in a direct line between popular destinations. Also known as a goat path. | [highway][highway]=[path][path] <br> [path][path] = [desire][desire]| [![image](https://d1cuyjsrcm0gby.cloudfront.net/dmlxBVFdp3OVrLvGr_VNgg/thumb-1024.jpg)](https://www.mapillary.com/map/im/dmlxBVFdp3OVrLvGr_VNgg)
| <b>Singletrack</b><br> Recreational in purpose, may be meandering or direct. Most often maintained by users. Often includes technically challenging sections, but some sections may be appropriate for transportation| | [![image](https://d1cuyjsrcm0gby.cloudfront.net/dTX27I-QVA84jNZDhjcMiQ/thumb-1024.jpg)](https://www.mapillary.com/map/dTX27I-QVA84jNZDhjcMiQ)|
| <b>Track road</b><br> Also known as doubletrack. Typically direct, but surfaces are often too rough for comfortable cycling. Motor vehicles such as ATVs are often permitted, but track roads are typically not used by conventional cars. May not be maintained.| | [![image](https://d1cuyjsrcm0gby.cloudfront.net/cmoaqPU1XpZm1TM5U8gfQA/thumb-1024.jpg)](https://www.mapillary.com/map/cmoaqPU1XpZm1TM5U8gfQA)|
| <b>Boardwalk</b><br> May be recreational in purpose, but some sections are suitable for transportation | highway=[path]<br>bridge=[boardwalk]<br>[surface]=wood| [![image](https://d1cuyjsrcm0gby.cloudfront.net/pnKXylx9EkyyNmtjBHi_0g/thumb-1024.jpg)](https://www.mapillary.com/map/pnKXylx9EkyyNmtjBHi_0g)|

<h2><a id="Plowing"> Plowing </a></h2>

If maintained: [seasonal][seasonal]=no <br> If not plowed: [seasonal][seasonal]=yes and add a conditional restriction of [access:conditional][access:conditional]=no @ Dec-Mar to indicate the period when the way is typically unavailable <br> If poorly plowed: add a conditional restriction of [smoothness:conditional][smoothness]=bad @ Dec-Mar

<h2><a id="Flooding"> Flooding </a></h2>

Use [flood_prone][flood_prone]=yes <br> If the flooding is a predictable annual event, you may wish to add conditional access restrictions to indicate times of the year when the way should be avoided; example: [access:conditional][access:conditional]=no @ May 1-15

<h2><a id="Optional tags"> Optional tags </a></h2>

[width][width] Most designated MUPs are 3m, though some are wider. Walkways are typically 2m 
<br> [smoothness][smoothness]. Read more on the wiki. Always a subjective call. Here are some more cycling-specific interpretations of the key: 

| Value          | Description                                | Photos     |
|----------------|--------------------------------------------|------------|
| Excellent      | - Fresh flawless pavement                    |[![image](https://d1cuyjsrcm0gby.cloudfront.net/76B0fQHwaSjke-HnuGsyAg/thumb-1024.jpg)](https://www.mapillary.com/map/im/76B0fQHwaSjke-HnuGsyAg)|
| Good           | - Decent on skinny tires, a few cracks and bumps <br> -Flawless stone dust    |[![image](https://d1cuyjsrcm0gby.cloudfront.net/FsJWrwjgEQFsuQVthxZpBg/thumb-1024.jpg)](https://www.mapillary.com/map/im/FsJWrwjgEQFsuQVthxZpBg)|
| Intermediate   | - Bumpy but not hazardous pavement <br> - Stonedust with some washouts <br> - Well-packed featureless dirt        | [![image](https://d1cuyjsrcm0gby.cloudfront.net/sNcWLsTqRYidaDZyvdWCuw/thumb-1024.jpg)](https://www.mapillary.com/map/im/sNcWLsTqRYidaDZyvdWCuw)|
| Bad            | - Pavement with jarring bumps, alligatoring, or large cracks <br> - Coarse gravel <br> - Dirt trail with small stones or some small roots        | [![image](https://d1cuyjsrcm0gby.cloudfront.net/tNEfnLaJW-CjOyoNocKxWA/thumb-1024.jpg)](https://www.mapillary.com/map/im/tNEfnLaJW-CjOyoNocKxWA)|
| Very_bad       | - Pavement with hazardous bumps and large cracks <br> - Rocky surface, such as an ATV trail <br> - Dirt trail where stones or roots require attention       | [![image](https://d1cuyjsrcm0gby.cloudfront.net/E2XjzfnUuCTG_v2DQBLkLQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/E2XjzfnUuCTG_v2DQBLkLQ)|
| Horrible       | - Dangerously broken pavement <br> - Trails with large stones or roots that may require dismounting or suspension        |[![image](https://d1cuyjsrcm0gby.cloudfront.net/HBJPYj3unJmoxpAQoH9sfA/thumb-1024.jpg)](https://www.mapillary.com/map/HBJPYj3unJmoxpAQoH9sfA)|
| Very_horrible  | - Rough-edged stones, many exposed roots, suitable only for fatbikes or full suspension       |[![image](https://d1cuyjsrcm0gby.cloudfront.net/HsZQPUukTzivaSw1fiUemA/thumb-1024.jpg)](https://www.mapillary.com/map/HsZQPUukTzivaSw1fiUemA)|
| Impassible     | - Almost nobody would be able to ride this       |[![image](https://d1cuyjsrcm0gby.cloudfront.net/N3kAgXz5-4A5G8k3xIxCZQ/thumb-1024.jpg)](https://www.mapillary.com/map/N3kAgXz5-4A5G8k3xIxCZQ)| 

<h2><a id="Parking"> Parking </a></h2>

It's possible to get into deep detail on street parking; we are mainly concerned with whether it is present, or saying definitively that it is absent.

| Feature                    | OSM Scheme                | Photos     |
|----------------------------|---------------------------|------------|
| Parking, left side         | [parking:lane:left][parking:lane]=yes     |
| Parking, right side        | [parking:lane:right][parking:lane]=yes    |
| Parking, both sides        | [parking:lane][parking:lane]=yes          |
| No Parking                 | [parking:lane][parking:lane]=no_parking
| No Stopping                | [parking:lane][parking:lane]=no_stopping

<h2><a id="Lane configuration"> Lane configuration </a></h2>

| Feature                                | OSM Scheme                | Photos     |
|----------------------------------------|---------------------------|------------|
| Two lanes. Most residential streets. | lanes=2     |
| Multiple lanes. Include turning lanes| lanes=5     |
| Speed limit. Only show if the speed is posted different than 50. | maxspeed=40  |

<h2><a id="Other tags for ways not shown"> Other tags for ways not shown </a></h2>

| Feature                                | OSM Scheme                | Photos     |
|----------------------------------------|---------------------------|------------|
|Truck route|[hgv][hgv]=yes|
|Trucks prohibited|[hgv][hgv]=no
|Bridge| bridge=yes |[![image](https://d1cuyjsrcm0gby.cloudfront.net/DM_icM01W41ppwECsD0joQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/DM_icM01W41ppwECsD0joQ)
|Tunnel| tunnel=yes|[![image](https://d1cuyjsrcm0gby.cloudfront.net/BABIQ-uSmxRTk4bkTbjCQg/thumb-1024.jpg)](https://www.mapillary.com/map/im/BABIQ-uSmxRTk4bkTbjCQg)|
|Lighting| lit=yes|[![image](https://d1cuyjsrcm0gby.cloudfront.net/O7G6yB8eP6dBTNKg7Kmnww/thumb-1024.jpg)](https://www.mapillary.com/map/im/O7G6yB8eP6dBTNKg7Kmnww)|
|Relation | operator=NCC or City of Ottawa or Ville de Gatineau|
|Official name of feature | name=*

<h2><a id="Points of Interest (Nodes)"> Points of Interest (Nodes) </a></h2>

- [amenity=bicycle_parking](https://wiki.openstreetmap.org/wiki/Tag:amenity=bicycle_parking) , [capacity=N](https://wiki.openstreetmap.org/wiki/Key:capacity)
- [amenity=drinking_water](https://wiki.openstreetmap.org/wiki/Tag:amenity=drinking_water)
- [amenity=bench](https://wiki.openstreetmap.org/wiki/Tag:amenity=bench)
- [amenity=waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket)
- [amenity=bicycle_repair_station](https://wiki.openstreetmap.org/wiki/Tag:amenity=bicycle_repair_station)
- bike share station
- Counter [man_made=monitoring_station](http://wiki.openstreetmap.org/wiki/Key:monitoring:bicycle) <br> [monitoring:bicycle=yes]

<h2><a id="Intersections and other Road Crossings"> Intersections and other Road Crossings </a></h2>

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| All-way stop              |
| Two-way stop              |
| Pedestrian Crossover      |
| Yield                     |
| Traffic circle, no bypass |
| Traffic circle with bypass|
| Bicycle box               |
| Jug handle                |     | [![image](https://d1cuyjsrcm0gby.cloudfront.net/d_SH6OmRutjlPgR3B5u8_w/thumb-1024.jpg)](https://www.mapillary.com/map/im/d_SH6OmRutjlPgR3B5u8_w)|
| Cyclist-only left turn lane|   |
| <i>Cyclist Dismount</i> sign     |
| Cycleway crosses highway  |

<h2><a id="Filtered Permeability and Pinch-Points"> Filtered Permeability and Pinch-Points </a></h2>

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Chicane without channel   |   |   |
| Chicane with channel      |   |   |
| P-gate                    | [barrier]=[cycle_barrier]<br>bicycle=yes<br>motor_vechicle=no | [![image](https://d1cuyjsrcm0gby.cloudfront.net/MNN5neMyOijTJ_WlFlwLmg/thumb-1024.jpg)](https://www.mapillary.com/map/im/MNN5neMyOijTJ_WlFlwLmg)
| Block/Boulder/Planter          | [barrier] = [block] <br> bicycle=yes<br> motor_vechicle=no|[![image](https://d1cuyjsrcm0gby.cloudfront.net/XpU-Zy9vjNcSsDooiZuXVA/thumb-1024.jpg)](https://www.mapillary.com/map/im/XpU-Zy9vjNcSsDooiZuXVA)
| Bollard                   |   |   |
| Split-path entrance       |   |   |

<h2><a id="Forced Dismounts"> Forced Dismounts </a></h2>

| Feature                   | OSM Scheme                | Photos     |
|---------------------------|---------------------------|------------|
| Very narrow gate (<90 cm gap) | [barrier]=[cycle_barrier]<br>bicycle=yes<br>maxwidth=0.5   |[![image](https://d1cuyjsrcm0gby.cloudfront.net/Tp61o9WU2bmonMmhjUyR2w/thumb-1024.jpg)](https://www.mapillary.com/map/im/Tp61o9WU2bmonMmhjUyR2w)
| Stairs with no trough     |highway=[steps]<br>[ramp]=no       | [![image](https://d1cuyjsrcm0gby.cloudfront.net/cPNFSreEy8iQ902_BJopyQ/thumb-1024.jpg)](https://www.mapillary.com/map/im/cPNFSreEy8iQ902_BJopyQ)
| Stairs with trough        |highway=[steps]<br>[ramp]=yes <br>ramp:bicycle=yes       | [![image](https://d1cuyjsrcm0gby.cloudfront.net/a8BOwiuTq7Xe5mVZ_Bqf1Q/thumb-1024.jpg)](https://www.mapillary.com/map/im/a8BOwiuTq7Xe5mVZ_Bqf1Q)
| Curb cut needed           |       |  [![image](https://d1cuyjsrcm0gby.cloudfront.net/0iNKJr-wUKL0HQ_XYdFopw/thumb-1024.jpg)](https://www.mapillary.com/map/im/0iNKJr-wUKL0HQ_XYdFopw)

[highway_cycleway]: http://wiki.openstreetmap.org/wiki/Tag:highway%3Dcycleway
[cycleway]: http://wiki.openstreetmap.org/wiki/Key:cycleway
[highway]: http://wiki.openstreetmap.org/wiki/Key:highway
[path]: http://wiki.openstreetmap.org/wiki/Tag:highway=path
[surface]: https://wiki.openstreetmap.org/wiki/Key:surface
[fine_gravel]: https://wiki.openstreetmap.org/wiki/tag:surface=fine_gravel
[asphalt]: https://wiki.openstreetmap.org/wiki/tag:surface=asphalt
[smoothness]: https://wiki.openstreetmap.org/wiki/Key:smoothness
[access:conditional]: http://wiki.openstreetmap.org/wiki/Conditional_restrictions
[flood_prone]: http://wiki.openstreetmap.org/wiki/Key:flood_prone
[width]: http://wiki.openstreetmap.org/wiki/Key:width
[desire]: http://wiki.openstreetmap.org/wiki/Tag:path%3Ddesire
[hgv]: http://wiki.openstreetmap.org/wiki/Key:hgv
[barrier]: http://wiki.openstreetmap.org/wiki/Key:barrier
[cycle_barrier]: http://wiki.openstreetmap.org/wiki/Tag:barrier%3Dcycle_barrier
[block]: https://wiki.openstreetmap.org/wiki/Tag%3Abarrier%3Dblock
[buffer]: http://wiki.openstreetmap.org/wiki/Proposed_features/Buffered_bike_lane
[boardwalk]:http://wiki.openstreetmap.org/wiki/Tag:bridge%3Dboardwalk
[ramp]:http://wiki.openstreetmap.org/wiki/Key:ramp
[steps]:http://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps
[shoulder]:http://wiki.openstreetmap.org/wiki/Key:shoulder
[share_busway]:http://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dshare_busway
[parking:lane]:http://wiki.openstreetmap.org/wiki/Key:parking:lane
[seasonal]:http://wiki.openstreetmap.org/wiki/Key:seasonal
[segregated]:http://wiki.openstreetmap.org/wiki/Key:segregated
