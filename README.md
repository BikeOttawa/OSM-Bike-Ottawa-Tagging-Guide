# OSM Bike Ottawa Tagging Guide

## Table of Contents

<ul>
  <li><a href='#Lanes'>Lanes</a></li>
  <li><a href='#Smoothness'>Smoothness</a></li>
  <li><a href='#Signs'>Signs</a></li>
  <li><a href='#Lane Configuration'>Lane Configuration</a></li>
  <li><a href='#Flooding'>Flooding</a></li>
  <li><a href='#Parking'>Parking</a></li>
  <li><a href='#Plowing'>Plowing</a></li>
  <li><a href='#Filtered Permeability and Pinch-Points'>Filtered Permeability and Pinch-Points</a></li>
  <li><a href='#Force Dismounts'>Force Dismounts</a></li>
  <li><a href='#Intersections and other Road Crossings'>Intersections and other Road Crossings</a></li>
  <li><a href='#Other tags for ways not shown'>Other tags for ways not shown</a></li>
  <li><a href='#Points of Interest (Nodes)'>Points of Interest (Nodes)</a></li>
</ul>

<h2 id="Lanes">Lanes</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Paved Multi-Use Path (MUP)**|Typically 3m wide, may be wider.<br>Intended for mixed bike and foot traffic.<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[foot](https://wiki.openstreetmap.org/wiki/Key:foot)=yes<br>[segregated](http://wiki.openstreetmap.org/wiki/Key:segregated)=no<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[asphalt](https://wiki.openstreetmap.org/wiki/tag:surface=asphalt)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg'></a>|
|**Twinned Path**|Typically >4.5 m wide.<br>Intended for separated bike and foot traffic<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[asphalt](https://wiki.openstreetmap.org/wiki/tag:surface=asphalt)<br>[segregated](http://wiki.openstreetmap.org/wiki/Key:segregated)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=J5eakBF0yAOttLLsGtnkcg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/J5eakBF0yAOttLLsGtnkcg/thumb-1024.jpg'></a>|
|**Walkway**|Typically <3m wide. May not have curb cuts.<br>Intended primarily for foot traffic,<br>though bikes are not prohibited<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=footway|<a href='https://www.mapillary.com/app/?focus=photo&pKey=fMftKPCR90gDvxZ_3q3V5w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/fMftKPCR90gDvxZ_3q3V5w/thumb-1024.jpg'></a>|
|**Unpaved Multi-Use Path (MUP)**|Typically 3m wide.<br>Intended for mixed bike and foot traffic.<br>Often a stonedust surface, but sometimes dirt.<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[fine_gravel](https://wiki.openstreetmap.org/wiki/tag:surface=fine_gravel)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=0y0R2Fs6pv3KvTgCEYPabw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/0y0R2Fs6pv3KvTgCEYPabw/thumb-1024.jpg'></a>|
|**One way protected lanes**|Also known as cycletracks.<br>Separated from the roadway, pedestrians not permitted.<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=GSkPP_J3o-ILEkeoMJMl0A'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/GSkPP_J3o-ILEkeoMJMl0A/thumb-1024.jpg'></a>|
|**Bi-directional protected cycletrack**|Separate way for the cycletrack.<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=1xOyTkegYkMF9SapKrqAnQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/1xOyTkegYkMF9SapKrqAnQ/thumb-1024.jpg'></a>|
|**Buffered bike lane**|The bike lane and roadway share a continuous surface,<br>but are separated by treatments that may include;<br>- jersey barriers<br>- planters<br>- flex stakes<br>- double paint line<br>|![way](img/way.png)<br>[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=lane<br>[buffer](http://wiki.openstreetmap.org/wiki/Proposed_features/Buffered_bike_lane)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=sCskYIeAaVOrs6pOvUVddQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sCskYIeAaVOrs6pOvUVddQ/thumb-1024.jpg'></a>|
|**Painted bike lane, on a divided road**|A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br>The lane is reserved for bikes by posted signage.<br>|![way](img/way.png)<br>cycleway:right=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=IbjORAYAgVQk5oUto7WgsQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/IbjORAYAgVQk5oUto7WgsQ/thumb-1024.jpg'></a>|
|**Painted bike lane, on an undivided road**|A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br>The lane is reserved for bikes by posted signage.<br>|![way](img/way.png)<br>[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=3Me8bNEXV5Tkr3OhsLO6Ow'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/3Me8bNEXV5Tkr3OhsLO6Ow/thumb-1024.jpg'></a>|
|**Shoulder, not signed as a bike lane**|A single line of paint delineates the shoulder.<br>No signage or bike symbols present.<br>Parking on the shoulder is typically permitted.<br>|![way](img/way.png)<br>shoulder:left/right/both<br>shoulder:surface=yes/no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=wYO6exNSPsFQM7nZblFMAQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/wYO6exNSPsFQM7nZblFMAQ/thumb-1024.jpg'></a>|
|**Contraflow lane**|On one-way streets,<br>a yellow line allows two-way bike traffic.<br>|![way](img/way.png)<br>[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=opposite_lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=cW35TfHANRe5DWbbxABJlw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cW35TfHANRe5DWbbxABJlw/thumb-1024.jpg'></a>|
|**Advisory bike lane**|Dashed lines delineate bike lanes on each side of the street.<br>The remaining roadway is too narrow for two-way motor traffic.<br>Motorists may enter the bike lanes when encountering an oncoming vehicle,<br>but must give priority to cyclists.<br>|![way](img/way.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=ok7p-w_Ej9nIG-S9eKK8pg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ok7p-w_Ej9nIG-S9eKK8pg/thumb-1024.jpg'></a>|
|**Shared bus/bike lane**|Cyclists will often have these lanes to themselves,<br>but sometimes will need to navigate amidst buses.<br>Designated by signage.<br>|![way](img/way.png)<br>[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=[share_busway](http://wiki.openstreetmap.org/wiki/Tag:cycleway=share_busway)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=PqTQqISWgK5QbWg5PRvaQA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PqTQqISWgK5QbWg5PRvaQA/thumb-1024.jpg'></a>|
|**Shared sidewalk (signed)**|A standard sidewalk, sharing designated by signage.<br>Surface is often concrete, rather than asphalt.<br>|![way](img/way.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=ZP4d2yqBwWWlfbixrztDzA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ZP4d2yqBwWWlfbixrztDzA/thumb-1024.jpg'></a>|
|**Dooring zone**|Unique in Ottawa.<br>Painted warning that cyclists should avoid riding close to parked vehicles.<br>|![way](img/way.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=kl9e_LG76Fvzom8PycQHAQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/kl9e_LG76Fvzom8PycQHAQ/thumb-1024.jpg'></a>|
|**Super sharrows**|Green backgound for enhanced visibility.<br>Indicates lane position cyclists should use on roads<br>where no cycling infrastructure is present.<br>|![way](img/way.png)<br>[sharrows](http://wiki.openstreetmap.org/wiki/Proposed_features/shared_lane)=left/right/both|<a href='https://www.mapillary.com/app/?focus=photo&pKey=Ai2jtWC-HyicF8V_NWbUcA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/Ai2jtWC-HyicF8V_NWbUcA/thumb-1024.jpg'></a>|
|**Sharrows**|Bike symbol indicates lane position cyclists should<br>use on roads where no cycling infrastructure is present.<br>Require frequent re-painting and may be very faded;<br>it's still of interest to know which roads are intended to have sharrows.<br>|![way](img/way.png)<br>[sharrows](http://wiki.openstreetmap.org/wiki/Proposed_features/shared_lane)=left/right/both|<a href='https://www.mapillary.com/app/?focus=photo&pKey=d-l1qlsZsdb1vJWyeIVeDw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d-l1qlsZsdb1vJWyeIVeDw/thumb-1024.jpg'></a>|
|**Pocket bike lane**|Painted lane positioned between a right-turn lane and a<br>through lane.<br>|![way](img/way.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=bDPf-6VzTi52JG2JqqNkjg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/bDPf-6VzTi52JG2JqqNkjg/thumb-1024.jpg'></a>|
|**Traffic-calming parking lane**|Resembles a bike lane or paved shoulder,<br>but is typically narrow and includes a curb.<br>Intended to visually narrow the road and calm traffic speeds.<br>Not specifically intended for cycling, but may be functional.<br>Parking is typically permitted.<br>|![way](img/way.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=AFnTWKXGzqrIFqDCHRUOcg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/AFnTWKXGzqrIFqDCHRUOcg/thumb-1024.jpg'></a>|
|**Service strip**|Asphalt strip, resembles a cycletrack,<br>but is typically narrow and in poor condition,<br>with no intersection treatments, and may include utility poles.<br>Intended as a low-maintenance surface for snow storage.<br>Also provide width and smoothness tags.<br>|![way](img/way.png)<br>[shoulder](http://wiki.openstreetmap.org/wiki/Key:shoulder)=service_strip<br>[width](http://wiki.openstreetmap.org/wiki/Key:width)=\*<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\*|<a href='https://www.mapillary.com/app/?focus=photo&pKey=s-IPpAUVbDsSPyDYNceg3Q'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/s-IPpAUVbDsSPyDYNceg3Q/thumb-1024.jpg'></a>|
|**Desire line**|Well-worn path in a direct line between popular destinations.<br>Also known as a goat path.<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)=[desire](http://wiki.openstreetmap.org/wiki/Tag:path=desire)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=dmlxBVFdp3OVrLvGr_VNgg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dmlxBVFdp3OVrLvGr_VNgg/thumb-1024.jpg'></a>|
|**Singletrack**|Recreational in purpose, may be meandering or direct.<br>Most often maintained by users.<br>Often includes technically challenging sections,<br>but some sections may be appropriate for transportation<br>|![way](img/way.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=dTX27I-QVA84jNZDhjcMiQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dTX27I-QVA84jNZDhjcMiQ/thumb-1024.jpg'></a>|
|**Track road**|Also known as doubletrack.<br>Typically direct, but surfaces are often too rough for comfortable cycling.<br>Motor vehicles such as ATVs are often permitted,<br>but track roads are typically not used by conventional cars.<br>May not be maintained.<br>|![way](img/way.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=cmoaqPU1XpZm1TM5U8gfQA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cmoaqPU1XpZm1TM5U8gfQA/thumb-1024.jpg'></a>|
|**Boardwalk**|May be recreational in purpose,<br>but some sections are suitable for transportation<br>|![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=[boardwalk](http://wiki.openstreetmap.org/wiki/Tag:bridge=boardwalk)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=wood|<a href='https://www.mapillary.com/app/?focus=photo&pKey=pnKXylx9EkyyNmtjBHi_0g'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/pnKXylx9EkyyNmtjBHi_0g/thumb-1024.jpg'></a>|

<h2 id="Smoothness">Smoothness</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Smoothness**|Read more on the wiki. Always a subjective call.<br>Here are some more cycling-specific interpretations of the keys.<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\*||
|**Excellent**|Fresh flawless pavement<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=excellent|<a href='https://www.mapillary.com/app/?focus=photo&pKey=76B0fQHwaSjke-HnuGsyAg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/76B0fQHwaSjke-HnuGsyAg/thumb-1024.jpg'></a>|
|**Good**|Decent on skinny tires, a few cracks and bumps<br>Flawless stone dust<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=good|<a href='https://www.mapillary.com/app/?focus=photo&pKey=FsJWrwjgEQFsuQVthxZpBg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/FsJWrwjgEQFsuQVthxZpBg/thumb-1024.jpg'></a>|
|**Intermediate**|A bike with sturdy tires and wheels would be preferred by most.<br>- Bumpy but not hazardous pavement.<br>- Stonedust with some minor washouts.<br>- Well-packed featureless dirt.<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=intermediate|<a href='https://www.mapillary.com/app/?focus=photo&pKey=sNcWLsTqRYidaDZyvdWCuw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sNcWLsTqRYidaDZyvdWCuw/thumb-1024.jpg'></a>|
|**Bad**|Pavement with jarring bumps, alligatoring, or large cracks.<br>Coarse gravel or stonedust with washouts that require alertness.<br>Dirt trail with small stones or some small roots.<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=bad|<a href='https://www.mapillary.com/app/?focus=photo&pKey=tNEfnLaJW-CjOyoNocKxWA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/tNEfnLaJW-CjOyoNocKxWA/thumb-1024.jpg'></a>|
|**Very_bad**|A mountain bike, perhaps with front suspension, is a more comfortable choice here.<br>Pavement with hazardous bumps and cracks large enough to swallow skinny wheels.<br>This is the worst pavement condition that Ottawa is willing to just live with.<br>- Stonedust with hazardous washouts.<br>- Rocky surface, such as an ATV trail.<br>- Dirt trail where stones or roots require attention.<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=very_bad|<a href='https://www.mapillary.com/app/?focus=photo&pKey=E2XjzfnUuCTG_v2DQBLkLQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/E2XjzfnUuCTG_v2DQBLkLQ/thumb-1024.jpg'></a>|
|**Horrible**|Dangerously broken pavement that should be fixed immediately;<br>this is not a tag that will often apply to paved surfaces.<br>- Trails with large stones or roots that may require dismounting or suspension<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=horrible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=HBJPYj3unJmoxpAQoH9sfA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HBJPYj3unJmoxpAQoH9sfA/thumb-1024.jpg'></a>|
|**Very Horrible**|Rough-edged stones, many exposed roots,<br>suitable only for fatbikes or full suspension<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=very_horrible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=HsZQPUukTzivaSw1fiUemA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HsZQPUukTzivaSw1fiUemA/thumb-1024.jpg'></a>|
|**Impassible**|Almost nobody would be able to ride this<br>|![way](img/way.png)<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=impassible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=N3kAgXz5-4A5G8k3xIxCZQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/N3kAgXz5-4A5G8k3xIxCZQ/thumb-1024.jpg'></a>|

<h2 id="Signs">Signs</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Share the road sign**|Useful to tag as an advocacy target<br>|![node](img/node.png)<br>[traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*||
|**Single file sign**|Useful to tag as an advocacy target<br>|![node](img/node.png)<br>[traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*|<a href='https://www.mapillary.com/app/?focus=photo&pKey=PWtqLBKAwQl2mMlLj1K6oQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PWtqLBKAwQl2mMlLj1K6oQ/thumb-1024.jpg'></a>|
|**Bike route sign**|May be useful as way-finding if they come with a bike route number,<br>but many are just generic green signs<br>|![node](img/node.png)<br>[traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*||
|**Walk your Bike**|A permissive sign that indicates you may walk your bike.<br>This sign alone does not make dismounting mandatory.<br>Tagging them will be useful for indicating areas where<br>there is insufficient space to share with pedestrians or<br>where legal road crossing facilities have not been provided.<br>|![node](img/node.png)<br>[traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*||

<h2 id="Lane Configuration">Lane Configuration</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Two Lanes**|Most residential streets.<br>|![way](img/way.png)<br>[lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=2||
|**Multiple Lanes**|Includes turning lanes<br>|![way](img/way.png)<br>[lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=5||
|**Width**|Most designated MUPs have a width of 3m,<br>though some are wider. Walkways are typically 2m<br>|![way](img/way.png)<br>[width](http://wiki.openstreetmap.org/wiki/Key:width)=\*||
|**Speed limit**|Only show if the speed is posted different than 50.<br>|![way](img/way.png)<br>[maxspeed](https://wiki.openstreetmap.org/wiki/Key:maxspeed)=40||

<h2 id="Flooding">Flooding</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Flood Prone**|Use `flood_prone=yes`<br>If the flooding is a predictable annual event,<br>you may wish to add conditional access restrictions to<br>indicate times of the year when the way should be avoided.<br>|![way](img/way.png)<br>[access:conditional](http://wiki.openstreetmap.org/wiki/Conditional_restrictions)=no @ May 1-15||

<h2 id="Parking">Parking</h2>

It's possible to get into deep detail on street parking;
we are mainly concerned with whether it is present,
or saying definitively that it is absent.

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Left**|Parking, left side<br>|![way](img/way.png)<br>[parking:lane:left](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=yes||
|**Right**|Parking, right side<br>|![way](img/way.png)<br>[parking:lane:right](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=yes||
|**Both**|Parking, both side<br>|![way](img/way.png)<br>[parking:lane](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=yes||
|**No Parking**|No Parking<br>|![way](img/way.png)<br>[parking:lane](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=no_parking||
|**No Stopping**|No Stopping<br>|![way](img/way.png)<br>[parking:lane](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=no_stopping||

<h2 id="Plowing">Plowing</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Maintained**|If maintained, `seasonal=no`<br>|![way](img/way.png)<br>[seasonal](http://wiki.openstreetmap.org/wiki/Key:seasonal)=no||
|**Not maintained**|If not plowed, `seasonal=yes` and<br>add a conditional restriction of `access:conditional=no` @ Dec-Mar<br>to indicate the period when the way is typically unavailable<br>|![way](img/way.png)<br>[seasonal](http://wiki.openstreetmap.org/wiki/Key:seasonal)=yes<br>[access:conditional](http://wiki.openstreetmap.org/wiki/Conditional_restrictions)=no||
|**Poorly maintained**|If poorly plowed, add a conditional restriction of `smoothness:conditional=bad` @ Dec-Mar<br>|![way](img/way.png)<br>smoothness:conditional=bad||

<h2 id="Filtered Permeability and Pinch-Points">Filtered Permeability and Pinch-Points</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Chicane without channel**||![node](img/node.png)<br>||
|**Chicane with channel**||![node](img/node.png)<br>||
|**P-Gate**||![node](img/node.png)<br>[barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[cycle_barrier](http://wiki.openstreetmap.org/wiki/Tag:barrier=cycle_barrier)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](http://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=MNN5neMyOijTJ_WlFlwLmg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/MNN5neMyOijTJ_WlFlwLmg/thumb-1024.jpg'></a>|
|**Block/Boulder/Planter**||![node](img/node.png)<br>[barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[block](https://wiki.openstreetmap.org/wiki/Tag:barrier=block)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](http://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=XpU-Zy9vjNcSsDooiZuXVA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/XpU-Zy9vjNcSsDooiZuXVA/thumb-1024.jpg'></a>|
|**Bollard**||![node](img/node.png)<br>[barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[bollard](https://wiki.openstreetmap.org/wiki/Tag:barrier=bollard)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](http://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=4fpzcNTFK8MZNuiRlzlBxw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/4fpzcNTFK8MZNuiRlzlBxw/thumb-1024.jpg'></a>|
|**Split-path entrance**||![node](img/node.png)<br>||

<h2 id="Force Dismounts">Force Dismounts</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Narrow Gate**|Very narrow gate (<90 cm gap)<br>|![node](img/node.png)<br>[barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[cycle_barrier](http://wiki.openstreetmap.org/wiki/Tag:barrier=cycle_barrier)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes/dismount<br>[maxwidth](http://wiki.openstreetmap.org/wiki/Key:maxwidth)=0.5|<a href='https://www.mapillary.com/app/?focus=photo&pKey=Tp61o9WU2bmonMmhjUyR2w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/Tp61o9WU2bmonMmhjUyR2w/thumb-1024.jpg'></a>|
|**Swing Gate**|Swing gate, can be opened and closed.<br>|![node](img/node.png)<br>[barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[swing_gate](https://wiki.openstreetmap.org/wiki/Tag:barrier=swing_gate)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes/dismount|<a href='https://www.mapillary.com/app/?focus=photo&pKey=5IlTYiFdJUkGmn4pmqr4bg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/5IlTYiFdJUkGmn4pmqr4bg/thumb-1024.jpg'></a>|
|**Stairs with no trough**||![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[steps](http://wiki.openstreetmap.org/wiki/Tag:highway=steps)<br>[ramp](http://wiki.openstreetmap.org/wiki/Key:ramp)=no<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=cPNFSreEy8iQ902_BJopyQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cPNFSreEy8iQ902_BJopyQ/thumb-1024.jpg'></a>|
|**Stairs with trough**||![way](img/way.png)<br>[highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[steps](http://wiki.openstreetmap.org/wiki/Tag:highway=steps)<br>[ramp](http://wiki.openstreetmap.org/wiki/Key:ramp)=yes<br>ramp:bicycle=yes<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=a8BOwiuTq7Xe5mVZ_Bqf1Q'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/a8BOwiuTq7Xe5mVZ_Bqf1Q/thumb-1024.jpg'></a>|
|**Lock crossing**||![way](img/way.png)<br>[bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=yes<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=wood<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=4B2MTPSRKj6JUV6H_c0PVg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/4B2MTPSRKj6JUV6H_c0PVg/thumb-1024.jpg'></a>|
|**Curb cut needed**||![node](img/node.png)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=0iNKJr-wUKL0HQ_XYdFopw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/0iNKJr-wUKL0HQ_XYdFopw/thumb-1024.jpg'></a>|

<h2 id="Intersections and other Road Crossings">Intersections and other Road Crossings</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**All-way stop**||![node](img/node.png)<br>||
|**Two-way stop**||![node](img/node.png)<br>||
|**Pedestrian Crossover**|Also known as PXOs. These are mid-block crossings,<br>designated by a variety of different signage treatments.<br>They are not crosswalks, which are located at intersections.<br>Cyclists may use PXOs, but are required by law to walk their bike.<br>|![node](img/node.png)<br>|<a href='https://www.mapillary.com/app/?focus=photo&pKey=BTxXRYVREFm3fy_NMQW5Yg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/BTxXRYVREFm3fy_NMQW5Yg/thumb-1024.jpg'></a>|
|**Yield**||![node](img/node.png)<br>||
|**Traffic circle, no bypass**||![node](img/node.png) ![way](img/way.png)<br>||
|**Traffic circle with bypass**||![node](img/node.png) ![way](img/way.png)<br>||
|**Bicycle box**|Also known as an advanced stop line (ASL).<br>ASL nodes are located before the actual junction node,<br>and are always connected to their junctions by the Way they're on.<br>|![node](img/node.png)<br>[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=[asl](http://wiki.openstreetmap.org/wiki/Tag:cycleway=asl)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=3A1jICZ8dyQ-5e3WAMZoog'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/3A1jICZ8dyQ-5e3WAMZoog/thumb-1024.jpg'></a>|
|**Jug handle**|These are places for the cyclists to pull off to the right,<br>out of the stream of traffic, and await an opportunity to cross the road.<br>|![node](img/node.png)<br>[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=[asl](http://wiki.openstreetmap.org/wiki/Tag:cycleway=asl)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=d_SH6OmRutjlPgR3B5u8_w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d_SH6OmRutjlPgR3B5u8_w/thumb-1024.jpg'></a>|
|**Cyclist-only left turn lane**||![node](img/node.png) ![way](img/way.png)<br>||
|**Cycleway crosses highway**||![node](img/node.png) ![way](img/way.png)<br>||

<h2 id="Other tags for ways not shown">Other tags for ways not shown</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Truck route**||![way](img/way.png)<br>[hgv](http://wiki.openstreetmap.org/wiki/Key:hgv)=yes||
|**Trucks prohibited**||![way](img/way.png)<br>[hgv](http://wiki.openstreetmap.org/wiki/Key:hgv)=no||
|**Bridge**||![way](img/way.png)<br>[bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=DM_icM01W41ppwECsD0joQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/DM_icM01W41ppwECsD0joQ/thumb-1024.jpg'></a>|
|**Tunnel**||![way](img/way.png)<br>tunnel=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=BABIQ-uSmxRTk4bkTbjCQg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/BABIQ-uSmxRTk4bkTbjCQg/thumb-1024.jpg'></a>|
|**Lighting**||![way](img/way.png)<br>lit=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=O7G6yB8eP6dBTNKg7Kmnww'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/O7G6yB8eP6dBTNKg7Kmnww/thumb-1024.jpg'></a>|
|**Relation**||![relation](img/relation.png)<br>operator=NCC/City of Ottawa/Ville de Gatineau|<a href='https://www.mapillary.com/app/?focus=photo&pKey=d0oNvFSc0G-oWSPsxMwoog'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d0oNvFSc0G-oWSPsxMwoog/thumb-1024.jpg'></a>|
|**Official name**||![way](img/way.png) ![node](img/node.png)<br>name=\*||

<h2 id="Points of Interest (Nodes)">Points of Interest (Nodes)</h2>

| Feature             | Description         | OSM Schema          | Photos              |
|---------------------|---------------------|---------------------|---------------------|
|**Bicycle Parking**||![node](img/node.png)<br>[amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=bicycle_parking<br>[capacity](https://wiki.openstreetmap.org/wiki/Key:capacity)=N||
|**Drinking Water**||![node](img/node.png)<br>[amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[drinking_water](https://wiki.openstreetmap.org/wiki/Tag:amenity=drinking_water)||
|**Bench**||![node](img/node.png)<br>[amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[bench](https://wiki.openstreetmap.org/wiki/Tag:amenity=bench)||
|**Waste Basket**||![node](img/node.png)<br>[amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket)||
|**Waste Basket**||![node](img/node.png)<br>[amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket)||
|**Bicycle Repair Station**||![node](img/node.png)<br>[amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=bicycle_repair_station||
|**Bicycle Share Station**||![node](img/node.png)<br>||
|**Bicycle Counter**||![node](img/node.png)<br>[man_made](https://wiki.openstreetmap.org/wiki/Key:man_made)=[monitoring_station](http://wiki.openstreetmap.org/wiki/Key:monitoring:bicycle)<br>monitoring:bicycle=yes||

