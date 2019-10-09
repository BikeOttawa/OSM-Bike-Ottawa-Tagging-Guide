# OSM Bike Ottawa Tagging Guide

## Table of Contents

<ul>
  <li><a href='#Off-Road'>Off-Road</a></li>
  <li><a href='#Physically Protected'>Physically Protected</a></li>
  <li><a href='#Painted Spaces'>Painted Spaces</a></li>
  <li><a href='#Mixed Traffic'>Mixed Traffic</a></li>
  <li><a href='#Smoothness'>Smoothness</a></li>
  <li><a href='#Lane Configuration'>Lane Configuration</a></li>
  <li><a href='#Parking'>Parking</a></li>
  <li><a href='#Flooding'>Flooding</a></li>
  <li><a href='#Plowing'>Plowing</a></li>
  <li><a href='#Filtered Permeability and Pinch-Points'>Filtered Permeability and Pinch-Points</a></li>
  <li><a href='#Force Dismounts'>Force Dismounts</a></li>
  <li><a href='#Intersections and other Road Crossings'>Intersections and other Road Crossings</a></li>
  <li><a href='#Other tags for ways not shown'>Other tags for ways not shown</a></li>
  <li><a href='#Points of Interest (Nodes)'>Points of Interest (Nodes)</a></li>
  <li><a href='#Signs'>Signs</a></li>
  <li><a href='#JOSM Tips & Tricks'>JOSM Tips & Tricks</a></li>
  <li><a href='#Tasking Manager'>Tasking Manager</a></li>
</ul>

<h2 id="Off-Road">Off-Road</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Paved-Multi-Use-Path-MUP'>Paved Multi-Use Path (MUP)</a> | Typically 3m wide, may be wider. Mixed bike and foot traffic.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[path](https://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[width](https://wiki.openstreetmap.org/wiki/Key:width)=\*<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\*<br>[segregated](https://wiki.openstreetmap.org/wiki/Key:segregated)=no<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[asphalt](https://wiki.openstreetmap.org/wiki/tag:surface=asphalt)<br>centreline=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg'></a>|
|<a name='feature-Twinned-Path'>Twinned Path</a> | Typically >4.5 m wide. Separated bike and foot traffic<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[path](https://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[asphalt](https://wiki.openstreetmap.org/wiki/tag:surface=asphalt)<br>[segregated](https://wiki.openstreetmap.org/wiki/Key:segregated)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=J5eakBF0yAOttLLsGtnkcg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/J5eakBF0yAOttLLsGtnkcg/thumb-1024.jpg'></a>|
|<a name='feature-Walkway'>Walkway</a> | Typically <3m wide. May not have curb cuts. Intended primarily for foot traffic, though bikes are not prohibited<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=footway<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[segregated](https://wiki.openstreetmap.org/wiki/Key:segregated)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=fMftKPCR90gDvxZ_3q3V5w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/fMftKPCR90gDvxZ_3q3V5w/thumb-1024.jpg'></a>|
|<a name='feature-Unpaved-Multi-Use-Path-MUP'>Unpaved Multi-Use Path (MUP)</a> | Typically 3m wide. Mixed bike and foot traffic. Often a stonedust surface, but sometimes dirt.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[path](https://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[fine_gravel](https://wiki.openstreetmap.org/wiki/tag:surface=fine_gravel)<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[segregated](https://wiki.openstreetmap.org/wiki/Key:segregated)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=0y0R2Fs6pv3KvTgCEYPabw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/0y0R2Fs6pv3KvTgCEYPabw/thumb-1024.jpg'></a>|
|<a name='feature-Desire-line'>Desire line</a> | Well-worn path in a direct line between popular destinations. Also known as a goat path.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[path](https://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[path](https://wiki.openstreetmap.org/wiki/Tag:highway=path)=[desire](https://wiki.openstreetmap.org/wiki/Tag:path=desire) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=dmlxBVFdp3OVrLvGr_VNgg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dmlxBVFdp3OVrLvGr_VNgg/thumb-1024.jpg'></a>|
|<a name='feature-Singletrack'>Singletrack</a> | Recreational in purpose, may be meandering or direct. Most often maintained by users. Often includes technically challenging sections, but some sections may be appropriate for transportation<br> | ![way](img/way.png)  | <a href='https://www.mapillary.com/app/?focus=photo&pKey=dTX27I-QVA84jNZDhjcMiQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dTX27I-QVA84jNZDhjcMiQ/thumb-1024.jpg'></a>|
|<a name='feature-Track-road'>Track road</a> | Also known as doubletrack. Typically direct, but surfaces are often too rough for comfortable cycling. Motor vehicles such as ATVs are often permitted, but track roads are typically not used by conventional cars. May not be maintained.<br> | ![way](img/way.png)  | <a href='https://www.mapillary.com/app/?focus=photo&pKey=cmoaqPU1XpZm1TM5U8gfQA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cmoaqPU1XpZm1TM5U8gfQA/thumb-1024.jpg'></a>|
|<a name='feature-Boardwalk'>Boardwalk</a> | May be recreational in purpose, but some sections are suitable for transportation<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[path](https://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=[boardwalk](https://wiki.openstreetmap.org/wiki/Tag:bridge=boardwalk)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=wood | <a href='https://www.mapillary.com/app/?focus=photo&pKey=pnKXylx9EkyyNmtjBHi_0g'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/pnKXylx9EkyyNmtjBHi_0g/thumb-1024.jpg'></a>|

<h2 id="Physically Protected">Physically Protected</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-One-way-protected-lane'>One way protected lane</a> | Also known as cycletrack. Separated from the roadway by elevation, pedestrians not permitted.  Map as a separate way from the road.<br>Add `cycleway=separate` to the road.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](https://wiki.openstreetmap.org/wiki/Key:oneway)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=GSkPP_J3o-ILEkeoMJMl0A'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/GSkPP_J3o-ILEkeoMJMl0A/thumb-1024.jpg'></a>|
|<a name='feature-Bi-directional-protected-lane'>Bi-directional protected lane</a> | Also known as cycletrack. Separated from the roadway by elevation, pedestrians not permitted.  Map as a separate way from the road.<br>Add `cycleway=separate` to the road.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](https://wiki.openstreetmap.org/wiki/Key:oneway)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=1xOyTkegYkMF9SapKrqAnQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/1xOyTkegYkMF9SapKrqAnQ/thumb-1024.jpg'></a>|
|<a name='feature-One-way-physically-protected-bike-lane'>One way physically protected bike lane</a> | The bike lane and roadway share a continuous surface but are separated by substantial treatments that may include:<br>- planters<br>- concrete sleepers<br>- jersey barriers<br>- parked cars<br>Map as a separate way from the road.<br>Add `cycleway=separate` to the road.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](https://wiki.openstreetmap.org/wiki/Key:oneway)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=965HdFnmOLCkMao9sTdqIw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/965HdFnmOLCkMao9sTdqIw/thumb-1024.jpg'></a>|
|<a name='feature-Contraflow-lane-with-separation'>Contraflow lane with separation</a> | If the separation is only paint or flex posts, see contraflow lanes in the "Painted Spaces" section. On one-way streets where there is a physical form of separation.<br>Map as a separate way from the road.<br>Add `cycleway=separate` to the road.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](https://wiki.openstreetmap.org/wiki/Key:oneway)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=cW35TfHANRe5DWbbxABJlw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cW35TfHANRe5DWbbxABJlw/thumb-1024.jpg'></a>|
|<a name='feature-Service-strip-REVIEW-NEEDED'>Service strip (REVIEW NEEDED)</a> | Asphalt strip, resembles a cycletrack,<br>but is typically narrow and in poor condition,<br>with no intersection treatments, and may include utility poles.<br>Intended as a low-maintenance surface for snow storage.<br>Also provide width and smoothness tags.<br> | ![way](img/way.png) [shoulder](https://wiki.openstreetmap.org/wiki/Key:shoulder)=service_strip<br>[width](https://wiki.openstreetmap.org/wiki/Key:width)=\*<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\* | <a href='https://www.mapillary.com/app/?focus=photo&pKey=s-IPpAUVbDsSPyDYNceg3Q'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/s-IPpAUVbDsSPyDYNceg3Q/thumb-1024.jpg'></a>|
|<a name='feature-Shared-sidewalk-signed'>Shared sidewalk (signed)</a> | A standard sidewalk, sharing designated by signage.<br>Surface is often concrete, rather than asphalt.<br>Map as a separate way from the road.<br>Add `cycleway=separate` to the road.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=footway<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=concrete | <a href='https://www.mapillary.com/app/?focus=photo&pKey=ZP4d2yqBwWWlfbixrztDzA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ZP4d2yqBwWWlfbixrztDzA/thumb-1024.jpg'></a>|

<h2 id="Painted Spaces">Painted Spaces</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Buffered-bike-lane'>Buffered bike lane</a> | Not to be confused with a protected bike lane (described in the previous section). The bike lane and roadway share a continuous surface but are separated by flimsy treatments that may include:<br>- flex stakes<br>- double paint line<br> | ![way](img/way.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=lane<br>cycleway:buffer=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=sCskYIeAaVOrs6pOvUVddQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sCskYIeAaVOrs6pOvUVddQ/thumb-1024.jpg'></a>|
|<a name='feature-Painted-bike-lane-on-a-divided-road'>Painted bike lane, on a divided road</a> | A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br><br>The lane is reserved for bikes by posted signage.<br> | ![way](img/way.png) cycleway:right=lane | <a href='https://www.mapillary.com/app/?focus=photo&pKey=IbjORAYAgVQk5oUto7WgsQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/IbjORAYAgVQk5oUto7WgsQ/thumb-1024.jpg'></a>|
|<a name='feature-Painted-bike-lane-on-an-undivided-road'>Painted bike lane, on an undivided road</a> | A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br><br>The lane is reserved for bikes by posted signage.<br> | ![way](img/way.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=lane | <a href='https://www.mapillary.com/app/?focus=photo&pKey=3Me8bNEXV5Tkr3OhsLO6Ow'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/3Me8bNEXV5Tkr3OhsLO6Ow/thumb-1024.jpg'></a>|
|<a name='feature-Advisory-bike-lane'>Advisory bike lane</a> | Dashed lines delineate bike lanes on each side of the street, and this functions like any other bike lane for cyclists. The remaining roadway is too narrow for two-way motor traffic.<br>Motorists may enter the bike lanes when encountering an oncoming vehicle, but must give priority to cyclists.<br> | ![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=1<br>[cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=lane | <a href='https://www.mapillary.com/app/?focus=photo&pKey=ok7p-w_Ej9nIG-S9eKK8pg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ok7p-w_Ej9nIG-S9eKK8pg/thumb-1024.jpg'></a>|
|<a name='feature-Pocket-bike-lane'>Pocket bike lane</a> | Painted lane positioned between a right-turn lane and a through lane.<br>Right turn lane length can be quite variable. The cycleway:middle tag is an invention, since there is no convention for this situation.<br> | ![way](img/way.png) -cycleway:middle=lane | <a href='https://www.mapillary.com/app/?focus=photo&pKey=rjk1bxrfxsRKPZ8Ly9xsIw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/rjk1bxrfxsRKPZ8Ly9xsIw/thumb-1024.jpg'></a>|
|<a name='feature-Contraflow-lane-no-separation'>Contraflow lane no separation</a> | On one-way streets, only a yellow line separates two-way bike traffic. If there is physical separation in the form of a barrier or vertical discontinuity, see the enrty on contraflow lanes with physical separation.<br> | ![way](img/way.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=opposite_lane | <a href='https://www.mapillary.com/app/?focus=photo&pKey=JqwzEP2joZHOWy3jhxBMjw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/JqwzEP2joZHOWy3jhxBMjw/thumb-1024.jpg'></a>|
|<a name='feature-Shoulder-not-signed-as-a-bike-lane'>Shoulder, not signed as a bike lane</a> | A single line of paint delineates the shoulder.<br>No signage or bike symbols present.<br>Map if there is enough space to bike, i.e. at least 2-3ft wide<br>Parking on the shoulder is typically permitted.<br> | ![way](img/way.png) cycleway:left/right/both=[shoulder](https://wiki.openstreetmap.org/wiki/Key:shoulder) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=wYO6exNSPsFQM7nZblFMAQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/wYO6exNSPsFQM7nZblFMAQ/thumb-1024.jpg'></a>|
|<a name='feature-Traffic-calming-parking-lane'>Traffic-calming parking lane</a> | Resembles a bike lane or paved shoulder,<br>but is typically narrow and, unlike a paved shoulder,<br>includes a curb. Intended to visually narrow the road and calm traffic speeds.<br><br>Not specifically intended for cycling, but may be functional.<br>Parking is typically permitted.<br> | ![way](img/way.png) -tag like any other shared road with/without parking | <a href='https://www.mapillary.com/app/?focus=photo&pKey=AFnTWKXGzqrIFqDCHRUOcg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/AFnTWKXGzqrIFqDCHRUOcg/thumb-1024.jpg'></a>|
|<a name='feature-Pedestrian-crossing'>Pedestrian crossing</a> | Controlled/uncontrolled pedestrian crossing often required to connect two non-intersecting ways<br> | ![way](img/way.png) Draw as a separate way where zebra is<br>[highway](https://wiki.openstreetmap.org/wiki/Key:highway)=footway<br>footway=crossing | |

<h2 id="Mixed Traffic">Mixed Traffic</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Dooring-zone'>Dooring zone</a> | Unique in Ottawa. Painted warning that cyclists should<br>avoid riding close to parked vehicles.<br> | ![way](img/way.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=shared_lane<br>otherwise, tag like any other shared street with parking | <a href='https://www.mapillary.com/app/?focus=photo&pKey=kl9e_LG76Fvzom8PycQHAQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/kl9e_LG76Fvzom8PycQHAQ/thumb-1024.jpg'></a>|
|<a name='feature-Super-sharrows'>Super sharrows</a> | Green backgound for enhanced visibility.<br>Indicates lane position cyclists should use on roads<br>where no cycling infrastructure is present.<br> | ![way](img/way.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=shared_lane | <a href='https://www.mapillary.com/app/?focus=photo&pKey=Ai2jtWC-HyicF8V_NWbUcA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/Ai2jtWC-HyicF8V_NWbUcA/thumb-1024.jpg'></a>|
|<a name='feature-Sharrows'>Sharrows</a> | Bike symbol indicates lane position cyclists should use on roads<br>where no cycling infrastructure is present. Require frequent re-painting and may be very faded;<br>it's still of interest to know which roads are intended to have sharrows.<br> | ![way](img/way.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=shared_lane | <a href='https://www.mapillary.com/app/?focus=photo&pKey=d-l1qlsZsdb1vJWyeIVeDw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d-l1qlsZsdb1vJWyeIVeDw/thumb-1024.jpg'></a>|
|<a name='feature-Shared-bus-bike-lane'>Shared bus/bike lane</a> | Cyclists will often have these lanes to themselves,<br>but sometimes will need to navigate amidst buses. Designated by signage.<br> | ![way](img/way.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=[share_busway](https://wiki.openstreetmap.org/wiki/Tag:cycleway=share_busway) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=PqTQqISWgK5QbWg5PRvaQA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PqTQqISWgK5QbWg5PRvaQA/thumb-1024.jpg'></a>|

<h2 id="Smoothness">Smoothness</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Smoothness'>Smoothness</a> | Read more on the wiki. Always a subjective call. Here are some more cycling-specific interpretations of the keys.<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\* | |
|<a name='feature-Excellent'>Excellent</a> | Fresh flawless pavement<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=excellent | <a href='https://www.mapillary.com/app/?focus=photo&pKey=76B0fQHwaSjke-HnuGsyAg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/76B0fQHwaSjke-HnuGsyAg/thumb-1024.jpg'></a>|
|<a name='feature-Good'>Good</a> | Decent on skinny tires<br>- Asphalt with a few cracks and bumps<br>- Flawless stone dust<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=good | <a href='https://www.mapillary.com/app/?focus=photo&pKey=FsJWrwjgEQFsuQVthxZpBg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/FsJWrwjgEQFsuQVthxZpBg/thumb-1024.jpg'></a>|
|<a name='feature-Intermediate'>Intermediate</a> | A bike with sturdy tires and wheels would be preferred by most.<br>- Bumpy but not hazardous pavement.<br>- Stonedust with some minor washouts.<br>- Well-packed featureless dirt.<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=intermediate | <a href='https://www.mapillary.com/app/?focus=photo&pKey=sNcWLsTqRYidaDZyvdWCuw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sNcWLsTqRYidaDZyvdWCuw/thumb-1024.jpg'></a>|
|<a name='feature-Bad'>Bad</a> | - Pavement with jarring bumps, alligatoring, or large cracks.<br>- Coarse gravel or stonedust with washouts that require alertness.<br>- Dirt trail with small stones or some small roots.<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=bad | <a href='https://www.mapillary.com/app/?focus=photo&pKey=tNEfnLaJW-CjOyoNocKxWA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/tNEfnLaJW-CjOyoNocKxWA/thumb-1024.jpg'></a>|
|<a name='feature-Very_bad'>Very_bad</a> | A mountain bike, perhaps with front suspension, is a more comfortable choice here.<br>This is the worst pavement condition that Ottawa is willing to just live with.<br><br>- Pavement with hazardous bumps and cracks large enough to swallow skinny wheels.<br>- Stonedust with hazardous washouts.<br>- Rocky surface, such as an ATV trail.<br>- Dirt trail where stones or roots require attention.<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=very_bad | <a href='https://www.mapillary.com/app/?focus=photo&pKey=E2XjzfnUuCTG_v2DQBLkLQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/E2XjzfnUuCTG_v2DQBLkLQ/thumb-1024.jpg'></a>|
|<a name='feature-Horrible'>Horrible</a> | Dangerously broken pavement that should be fixed immediately; this is not a tag that will often apply to paved surfaces.<br>- Trails with large stones or roots that may require dismounting or suspension<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=horrible | <a href='https://www.mapillary.com/app/?focus=photo&pKey=HBJPYj3unJmoxpAQoH9sfA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HBJPYj3unJmoxpAQoH9sfA/thumb-1024.jpg'></a>|
|<a name='feature-Very-Horrible'>Very Horrible</a> | Rough-edged stones, many exposed roots, suitable only for fatbikes or full suspension<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=very_horrible | <a href='https://www.mapillary.com/app/?focus=photo&pKey=HsZQPUukTzivaSw1fiUemA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HsZQPUukTzivaSw1fiUemA/thumb-1024.jpg'></a>|
|<a name='feature-Impassable'>Impassable</a> | Almost nobody would be able to ride this<br> | ![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=impassable | <a href='https://www.mapillary.com/app/?focus=photo&pKey=N3kAgXz5-4A5G8k3xIxCZQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/N3kAgXz5-4A5G8k3xIxCZQ/thumb-1024.jpg'></a>|

<h2 id="Lane Configuration">Lane Configuration</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-One-Lane'>One Lane</a> | Advisory bike lane streets where cars must use bike lane to pass by each other. Single-lane bridges.<br> | ![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=2 | <a href='https://www.mapillary.com/app/?focus=photo&pKey=NDFPt99h2cX8U71dvJbVpA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/NDFPt99h2cX8U71dvJbVpA/thumb-1024.jpg'></a>|
|<a name='feature-Two-Lanes'>Two Lanes</a> | Most residential streets consist of two lanes.<br> | ![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=2 | <a href='https://www.mapillary.com/app/?focus=photo&pKey=YYr05zv-VRKNB07lm1HA4g'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/YYr05zv-VRKNB07lm1HA4g/thumb-1024.jpg'></a>|
|<a name='feature-Multiple-Lanes'>Multiple Lanes</a> | Includes turning lanes<br> | ![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=5 | |
|<a name='feature-Width'>Width</a> | Most designated MUPs have a width of 3m, though some are wider. Walkways are typically 2m<br> | ![way](img/way.png) [width](https://wiki.openstreetmap.org/wiki/Key:width)=\* | |
|<a name='feature-Speed-limit'>Speed limit</a> | Only show if the speed is posted different than 50.<br> | ![way](img/way.png) [maxspeed](https://wiki.openstreetmap.org/wiki/Key:maxspeed)=40 | |

<h2 id="Parking">Parking</h2>

It's possible to get into deep detail on street parking;
we are mainly concerned with whether it is present,
or saying definitively that it is absent.

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Left'>Left</a> | Parking, left side<br> | ![way](img/way.png) [parking:lane:left](https://wiki.openstreetmap.org/wiki/Key:parking:lane)=parallel | |
|<a name='feature-Right'>Right</a> | Parking, right side<br> | ![way](img/way.png) [parking:lane:right](https://wiki.openstreetmap.org/wiki/Key:parking:lane)=parallel | |
|<a name='feature-Both'>Both</a> | Parking, both side<br> | ![way](img/way.png) parking:lane:both=parallel | |
|<a name='feature-No-Parking'>No Parking</a> | No Parking<br> | ![way](img/way.png) parking:lane:both=no_parking | |
|<a name='feature-No-Stopping'>No Stopping</a> | No Stopping<br> | ![way](img/way.png) parking:lane:both=no_stopping | |

<h2 id="Flooding">Flooding</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Flood-Prone'>Flood Prone</a> | Use `flood_prone=yes`<br>If the flooding is a predictable annual event,<br>you may wish to add conditional access restrictions to<br>indicate times of the year when the way should be avoided.<br> | ![way](img/way.png) [access:conditional](https://wiki.openstreetmap.org/wiki/Conditional_restrictions)=no @ May 1-15 | |

<h2 id="Plowing">Plowing</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Maintained'>Maintained</a> | If maintained, `winter_service=yes`<br> | ![way](img/way.png) [winter_service](https://wiki.openstreetmap.org/wiki/Key:winter_service)=yes | |
|<a name='feature-Not-maintained'>Not maintained</a> | If not plowed, `winter_service=no`<br> | ![way](img/way.png) [winter_service](https://wiki.openstreetmap.org/wiki/Key:winter_service)=no | |
|<a name='feature-Poorly-maintained'>Poorly maintained</a> | If poorly plowed, add a conditional restriction of `smoothness:conditional=bad` @ Dec-Mar<br> | ![way](img/way.png) smoothness:conditional=bad | |

<h2 id="Filtered Permeability and Pinch-Points">Filtered Permeability and Pinch-Points</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Chicane-without-channel'>Chicane without channel</a> |  | ![node](img/node.png)  | |
|<a name='feature-Chicane-with-channel'>Chicane with channel</a> |  | ![node](img/node.png)  | |
|<a name='feature-P-Gate'>P-Gate</a> |  | ![node](img/node.png) [barrier](https://wiki.openstreetmap.org/wiki/Key:barrier)=[cycle_barrier](https://wiki.openstreetmap.org/wiki/Tag:barrier=cycle_barrier)<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](https://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=MNN5neMyOijTJ_WlFlwLmg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/MNN5neMyOijTJ_WlFlwLmg/thumb-1024.jpg'></a>|
|<a name='feature-Block-Boulder-Planter'>Block/Boulder/Planter</a> |  | ![node](img/node.png) [barrier](https://wiki.openstreetmap.org/wiki/Key:barrier)=[block](https://wiki.openstreetmap.org/wiki/Tag:barrier=block)<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](https://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=XpU-Zy9vjNcSsDooiZuXVA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/XpU-Zy9vjNcSsDooiZuXVA/thumb-1024.jpg'></a>|
|<a name='feature-Bollard'>Bollard</a> |  | ![node](img/node.png) [barrier](https://wiki.openstreetmap.org/wiki/Key:barrier)=[bollard](https://wiki.openstreetmap.org/wiki/Tag:barrier=bollard)<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](https://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=4fpzcNTFK8MZNuiRlzlBxw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/4fpzcNTFK8MZNuiRlzlBxw/thumb-1024.jpg'></a>|
|<a name='feature-Split-path-entrance'>Split-path entrance</a> |  | ![node](img/node.png)  | <a href='https://www.mapillary.com/app/?focus=photo&pKey=vVBdJH4wCSRs6ycmiTiR_A'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/vVBdJH4wCSRs6ycmiTiR_A/thumb-1024.jpg'></a>|

<h2 id="Force Dismounts">Force Dismounts</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Narrow-Gate'>Narrow Gate</a> | Very narrow gate (<90 cm gap)<br> | ![node](img/node.png) [barrier](https://wiki.openstreetmap.org/wiki/Key:barrier)=[cycle_barrier](https://wiki.openstreetmap.org/wiki/Tag:barrier=cycle_barrier)<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes/dismount<br>[maxwidth](https://wiki.openstreetmap.org/wiki/Key:maxwidth)=0.5 | <a href='https://www.mapillary.com/app/?focus=photo&pKey=Tp61o9WU2bmonMmhjUyR2w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/Tp61o9WU2bmonMmhjUyR2w/thumb-1024.jpg'></a>|
|<a name='feature-Swing-Gate'>Swing Gate</a> | Swing gate, can be opened and closed.<br> | ![node](img/node.png) [barrier](https://wiki.openstreetmap.org/wiki/Key:barrier)=[swing_gate](https://wiki.openstreetmap.org/wiki/Tag:barrier=swing_gate)<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes/dismount | <a href='https://www.mapillary.com/app/?focus=photo&pKey=5IlTYiFdJUkGmn4pmqr4bg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/5IlTYiFdJUkGmn4pmqr4bg/thumb-1024.jpg'></a>|
|<a name='feature-Stairs-with-no-trough'>Stairs with no trough</a> |  | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[steps](https://wiki.openstreetmap.org/wiki/Tag:highway=steps)<br>[ramp](https://wiki.openstreetmap.org/wiki/Key:ramp)=no<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](https://wiki.openstreetmap.org/wiki/Key:access) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=cPNFSreEy8iQ902_BJopyQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cPNFSreEy8iQ902_BJopyQ/thumb-1024.jpg'></a>|
|<a name='feature-Stairs-with-trough'>Stairs with trough</a> |  | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=[steps](https://wiki.openstreetmap.org/wiki/Tag:highway=steps)<br>[ramp](https://wiki.openstreetmap.org/wiki/Key:ramp)=yes<br>[ramp:bicycle](https://wiki.openstreetmap.org/wiki/Key:ramp:bicycle)=yes<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](https://wiki.openstreetmap.org/wiki/Key:access) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=a8BOwiuTq7Xe5mVZ_Bqf1Q'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/a8BOwiuTq7Xe5mVZ_Bqf1Q/thumb-1024.jpg'></a>|
|<a name='feature-Lock-crossing'>Lock crossing</a> |  | ![way](img/way.png) [bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=yes<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=wood<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](https://wiki.openstreetmap.org/wiki/Key:access) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=4B2MTPSRKj6JUV6H_c0PVg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/4B2MTPSRKj6JUV6H_c0PVg/thumb-1024.jpg'></a>|
|<a name='feature-Curb-cut-needed'>Curb cut needed</a> |  | ![node](img/node.png) [bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](https://wiki.openstreetmap.org/wiki/Key:access) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=0iNKJr-wUKL0HQ_XYdFopw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/0iNKJr-wUKL0HQ_XYdFopw/thumb-1024.jpg'></a>|

<h2 id="Intersections and other Road Crossings">Intersections and other Road Crossings</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-All-way-stop'>All-way stop</a> | Place stop sign on the intersection in OSM.<br> | ![node](img/node.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=stop | <a href='https://www.mapillary.com/app/?focus=photo&pKey=i_bpXpcvrlUcJftdbKq_'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/i_bpXpcvrlUcJftdbKq_/thumb-1024.jpg'></a>|
|<a name='feature-Two-way-stop'>Two-way stop</a> |  | ![node](img/node.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=stop | |
|<a name='feature-Pedestrian-Crossover'>Pedestrian Crossover</a> | Also known as PXOs. These are mid-block crossings,<br>designated by a variety of different signage treatments.<br>They are not crosswalks, which are located at intersections.<br>Cyclists may use PXOs, but are required by law to walk their bike.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=footway<br>footway=crossing<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](https://wiki.openstreetmap.org/wiki/Key:access)<br>[segregated](https://wiki.openstreetmap.org/wiki/Key:segregated)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=BTxXRYVREFm3fy_NMQW5Yg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/BTxXRYVREFm3fy_NMQW5Yg/thumb-1024.jpg'></a>|
|<a name='feature-Yield'>Yield</a> |  | ![node](img/node.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=give_way | |
|<a name='feature-Traffic-circle-no-bypass'>Traffic circle, no bypass</a> |  | ![node](img/node.png) ![way](img/way.png)  | |
|<a name='feature-Traffic-circle-with-bypass'>Traffic circle with bypass</a> |  | ![node](img/node.png) ![way](img/way.png)  | |
|<a name='feature-Bicycle-box'>Bicycle box</a> | Also known as an advanced stop line (ASL).<br>ASL nodes are located before the actual junction node,<br>and are always connected to their junctions by the Way they're on.<br> | ![node](img/node.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=[asl](https://wiki.openstreetmap.org/wiki/Tag:cycleway=asl) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=3A1jICZ8dyQ-5e3WAMZoog'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/3A1jICZ8dyQ-5e3WAMZoog/thumb-1024.jpg'></a>|
|<a name='feature-Jug-handle'>Jug handle</a> | These are places for the cyclists to pull off to the right,<br>out of the stream of traffic, and await an opportunity to cross the road.<br> | ![node](img/node.png) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway)=[asl](https://wiki.openstreetmap.org/wiki/Tag:cycleway=asl) | <a href='https://www.mapillary.com/app/?focus=photo&pKey=d_SH6OmRutjlPgR3B5u8_w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d_SH6OmRutjlPgR3B5u8_w/thumb-1024.jpg'></a>|
|<a name='feature-Cyclist-only-left-turn-lane'>Cyclist-only left turn lane</a> |  | ![node](img/node.png) ![way](img/way.png)  | |
|<a name='feature-Path-or-sidewalk-crosses-highway-without-dedicated-cycling-infrastructure'>Path or sidewalk crosses highway (without dedicated cycling infrastructure)</a> | Places where there is only pedestrian infrastructure to cross a road.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=footway<br>footway=crossing<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](https://wiki.openstreetmap.org/wiki/Key:access)<br>[segregated](https://wiki.openstreetmap.org/wiki/Key:segregated)=no | <a href='https://www.mapillary.com/app/?focus=photo&pKey=owHxC0kiaS1fVheKLXny5E'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/owHxC0kiaS1fVheKLXny5E/thumb-1024.jpg'></a>|
|<a name='feature-Cycleway-crosses-highway'>Cycleway crosses highway</a> | Places where there are both pedestrian and cycling infrastructure to cross a road.<br> | ![way](img/way.png) [highway](https://wiki.openstreetmap.org/wiki/Key:highway)=footway<br>footway=crossing<br>[bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[segregated](https://wiki.openstreetmap.org/wiki/Key:segregated)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=lDGaiSziBCBSXBk9Dy5ZYA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/lDGaiSziBCBSXBk9Dy5ZYA/thumb-1024.jpg'></a>|

<h2 id="Other tags for ways not shown">Other tags for ways not shown</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Truck-route'>Truck route</a> |  | ![way](img/way.png) [hgv](https://wiki.openstreetmap.org/wiki/Key:hgv)=yes | |
|<a name='feature-Trucks-prohibited'>Trucks prohibited</a> |  | ![way](img/way.png) [hgv](https://wiki.openstreetmap.org/wiki/Key:hgv)=no | |
|<a name='feature-Bridge'>Bridge</a> |  | ![way](img/way.png) [bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=DM_icM01W41ppwECsD0joQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/DM_icM01W41ppwECsD0joQ/thumb-1024.jpg'></a>|
|<a name='feature-Tunnel'>Tunnel</a> |  | ![way](img/way.png) [tunnel](https://wiki.openstreetmap.org/wiki/Key:tunnel)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=BABIQ-uSmxRTk4bkTbjCQg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/BABIQ-uSmxRTk4bkTbjCQg/thumb-1024.jpg'></a>|
|<a name='feature-Lighting'>Lighting</a> |  | ![way](img/way.png) [lit](https://wiki.openstreetmap.org/wiki/Key:lit)=yes | <a href='https://www.mapillary.com/app/?focus=photo&pKey=O7G6yB8eP6dBTNKg7Kmnww'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/O7G6yB8eP6dBTNKg7Kmnww/thumb-1024.jpg'></a>|
|<a name='feature-Operator'>Operator</a> |  | ![operator](undefined) operator=NCC/City of Ottawa/Ville de Gatineau | <a href='https://www.mapillary.com/app/?focus=photo&pKey=d0oNvFSc0G-oWSPsxMwoog'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d0oNvFSc0G-oWSPsxMwoog/thumb-1024.jpg'></a>|
|<a name='feature-Official-name'>Official name</a> |  | ![way](img/way.png) ![node](img/node.png) name=\* | |

<h2 id="Points of Interest (Nodes)">Points of Interest (Nodes)</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Bicycle-Parking'>Bicycle Parking</a> |  | ![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=bicycle_parking<br>[capacity](https://wiki.openstreetmap.org/wiki/Key:capacity)=N | |
|<a name='feature-Drinking-Water'>Drinking Water</a> |  | ![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[drinking_water](https://wiki.openstreetmap.org/wiki/Tag:amenity=drinking_water) | |
|<a name='feature-Bench'>Bench</a> |  | ![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[bench](https://wiki.openstreetmap.org/wiki/Tag:amenity=bench) | |
|<a name='feature-Waste-Basket'>Waste Basket</a> |  | ![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket) | |
|<a name='feature-Waste-Basket'>Waste Basket</a> |  | ![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket) | |
|<a name='feature-Bicycle-Repair-Station'>Bicycle Repair Station</a> |  | ![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=bicycle_repair_station | |
|<a name='feature-Bicycle-Share-Station'>Bicycle Share Station</a> |  | ![node](img/node.png)  | |
|<a name='feature-Bicycle-Counter'>Bicycle Counter</a> |  | ![node](img/node.png) [man_made](https://wiki.openstreetmap.org/wiki/Key:man_made)=[monitoring_station](https://wiki.openstreetmap.org/wiki/Key:monitoring:bicycle)<br>monitoring:bicycle=yes | |

<h2 id="Signs">Signs</h2>

| Feature    | Description         | OSM Schema          | Mapillary Photo     |
|------------|---------------------|---------------------|---------------------|
|<a name='feature-Share-the-road-sign'>Share the road sign</a> | Useful to tag as an advocacy target<br> | ![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\* | |
|<a name='feature-Single-file-sign'>Single file sign</a> | Useful to tag as an advocacy target<br> | ![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\* | <a href='https://www.mapillary.com/app/?focus=photo&pKey=PWtqLBKAwQl2mMlLj1K6oQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PWtqLBKAwQl2mMlLj1K6oQ/thumb-1024.jpg'></a>|
|<a name='feature-Bike-route-sign'>Bike route sign</a> | May be useful as way-finding if they come with a bike route number, but many are just generic green signs<br> | ![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\* | |
|<a name='feature-Walk-your-Bike'>Walk your Bike</a> | A permissive sign that indicates you may walk your bike. This sign does not make dismounting mandatory.Tagging them will be useful for indicating areas where there is insufficient space to share with pedestrians or where legal road crossing facilities have not been provided.<br> | ![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\* | <a href='https://www.mapillary.com/app/?focus=photo&pKey=tRnTqVVX3ifDSc72EIURXw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/tRnTqVVX3ifDSc72EIURXw/thumb-1024.jpg'></a>|

<h2 id="JOSM Tips & Tricks">JOSM Tips & Tricks</h2>

- Enable ["Parking Lanes" style in JOSM](https://blog.mapbox.com/mapping-turn-lanes-in-openstreetmap-5da9bf764f0d) to easily see existing parking tags
- Apply filter `highway=*` in JOSM (tick checkbox in Inverse column to hide everything but roads) - to avoid clutter and annoying landuse areas that stick to roads
- Use Google Streetview since you need to look sideways at signs. Just open it in another tab and quickly jump back and forth. Takes a few seconds for each block. If you see parked cars right away - easy. If no cars around - check for sign posts and closest hydro poles. If still nothing - then parking is allowed.
- Don't bother with conditional parking. If parking is allowed at any point during the day then from stressmap point of view parking is allowed
- Cut ways if needed, when rules differ between blocks (In JOSM Ctrl-select road and node and press "P")
- If you have several roads with identical parking rules - just Ctrl-select them and add same tags

<h2 id="Tasking Manager">Tasking Manager</h2>

### References

Before starting this OSM Cycling Task, read the following references to be familiar with the cycling OSM scheme.

- [OSM Bike Ottawa Guide](https://github.com/osmottawa/OSM-Bike-Ottawa-Tagging-Guide)
- [LTS Scheme](https://docs.google.com/document/d/1GUjh7mXMvU8DuqyOxof6IMYdlEgGU5Y0-oyUhw3TlHE)

## Tasks

This Tasking Manager will be divided into 2 tasks.

### Task 1 - Parking Lane Configuration and Speed Limits (Beginner)

Mark as `done` in the Tasking Manager.

- [`maxspeed`](#feature-Speed-limit)
- `parking:lane:left`
- `parking:lane:right`
- `parking:lane:both`

Possible values: `parallel`, `marked`, `no_stopping`, `no_parking`, `fire_lane`

More description of parking tags: [https://wiki.openstreetmap.org/wiki/Key:parking:lane#Parking_position](https://wiki.openstreetmap.org/wiki/Key:parking:lane#Parking_position)

### Task 2 - Biking Conditions (Advanced)

Mark as `validated` in the Tasking Manager.

- [`highway`](#Off-road)
- [`smoothness`](#Smoothness)
- [`parking:lane:left/right/both`](#Parking)
- [`shoulder:left/right/both`](#feature-Shoulder-not-signed-as-a-bike-lane)
- [`cycleway`](#feature-Bi-directional-protected-cycletrack)
- [`cycleway:buffer`](#feature-Buffered-bike-lane)

