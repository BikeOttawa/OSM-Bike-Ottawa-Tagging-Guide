# OSM Bike Ottawa Tagging Guide

## Table of Contents

<ul>
  <li><a href='#Highway'>Highway</a></li>
  <li><a href='#Smoothness'>Smoothness</a></li>
  <li><a href='#Signs'>Signs</a></li>
  <li><a href='#Lane Configuration'>Lane Configuration</a></li>
  <li><a href='#Shoulder'>Shoulder</a></li>
  <li><a href='#Flooding'>Flooding</a></li>
  <li><a href='#Parking'>Parking</a></li>
  <li><a href='#Plowing'>Plowing</a></li>
  <li><a href='#Filtered Permeability and Pinch-Points'>Filtered Permeability and Pinch-Points</a></li>
  <li><a href='#Force Dismounts'>Force Dismounts</a></li>
  <li><a href='#Intersections and other Road Crossings'>Intersections and other Road Crossings</a></li>
  <li><a href='#Other tags for ways not shown'>Other tags for ways not shown</a></li>
  <li><a href='#Points of Interest (Nodes)'>Points of Interest (Nodes)</a></li>
</ul>

<h2 id="Highway">Highway</h2>

<h3 id="Paved Multi-Use Path (MUP)">Highway - Paved Multi-Use Path (MUP)</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Typically 3m wide, may be wider. Mixed bike and foot traffic.<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[width](http://wiki.openstreetmap.org/wiki/Key:width)=\*<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\*<br>[segregated](http://wiki.openstreetmap.org/wiki/Key:segregated)=no<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[asphalt](https://wiki.openstreetmap.org/wiki/tag:surface=asphalt)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=xvX6Bexu1gEE_H9KlfodLQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/xvX6Bexu1gEE_H9KlfodLQ/thumb-1024.jpg'></a>|

<h3 id="Twinned Path">Highway - Twinned Path</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Typically >4.5 m wide. Separated bike and foot traffic<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[asphalt](https://wiki.openstreetmap.org/wiki/tag:surface=asphalt)<br>[segregated](http://wiki.openstreetmap.org/wiki/Key:segregated)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=J5eakBF0yAOttLLsGtnkcg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/J5eakBF0yAOttLLsGtnkcg/thumb-1024.jpg'></a>|

<h3 id="Walkway">Highway - Walkway</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Typically <3m wide. May not have curb cuts. Intended primarily for foot traffic, though bikes are not prohibited<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=footway|<a href='https://www.mapillary.com/app/?focus=photo&pKey=fMftKPCR90gDvxZ_3q3V5w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/fMftKPCR90gDvxZ_3q3V5w/thumb-1024.jpg'></a>|

<h3 id="Unpaved Multi-Use Path (MUP)">Highway - Unpaved Multi-Use Path (MUP)</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Typically 3m wide. Mixed bike and foot traffic. Often a stonedust surface, but sometimes dirt.<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=[fine_gravel](https://wiki.openstreetmap.org/wiki/tag:surface=fine_gravel)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=0y0R2Fs6pv3KvTgCEYPabw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/0y0R2Fs6pv3KvTgCEYPabw/thumb-1024.jpg'></a>|

<h3 id="One way protected lanes">Highway - One way protected lanes</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Also known as cycletracks. Separated from the roadway by elevation, pedestrians not permitted.<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=GSkPP_J3o-ILEkeoMJMl0A'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/GSkPP_J3o-ILEkeoMJMl0A/thumb-1024.jpg'></a>|

<h3 id="One way protected lane, on only one side of a two-way road">Highway - One way protected lane, on only one side of a two-way road</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Also known as a cycletrack. Not all roads have cycletracks on both sides. Separated from the roadway, pedestrians not permitted.<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)<br>cycleway:right=lane<br>[oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=2mC6bW6jTCYHol6aXkcRHw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/2mC6bW6jTCYHol6aXkcRHw/thumb-1024.jpg'></a>|

<h3 id="Bi-directional protected cycletrack">Highway - Bi-directional protected cycletrack</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Separate way for the cycletrack.<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=1xOyTkegYkMF9SapKrqAnQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/1xOyTkegYkMF9SapKrqAnQ/thumb-1024.jpg'></a>|

<h3 id="One way physically protected bike lane">Highway - One way physically protected bike lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|The bike lane and roadway share a continuous surface but are separated by substantial treatments that may include:<br>- planters<br>- concrete sleepers<br>- jersey barriers<br>- parked cars<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)<br>[oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=965HdFnmOLCkMao9sTdqIw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/965HdFnmOLCkMao9sTdqIw/thumb-1024.jpg'></a>|

<h3 id="Buffered bike lane">Highway - Buffered bike lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|The bike lane and roadway share a continuous surface but are separated by flimsy treatments that may include:<br>- flex stakes<br>- double paint line<br>|![way](img/way.png) [cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=lane<br>cycleway:buffer=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=sCskYIeAaVOrs6pOvUVddQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sCskYIeAaVOrs6pOvUVddQ/thumb-1024.jpg'></a>|

<h3 id="Painted bike lane, on a divided road">Highway - Painted bike lane, on a divided road</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br><br>The lane is reserved for bikes by posted signage.<br>|![way](img/way.png) cycleway:right=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=IbjORAYAgVQk5oUto7WgsQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/IbjORAYAgVQk5oUto7WgsQ/thumb-1024.jpg'></a>|

<h3 id="Painted bike lane, on an undivided road">Highway - Painted bike lane, on an undivided road</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|A single line of paint delineates the bike lane.<br>Bike symbol may be painted in the lane.<br><br>The lane is reserved for bikes by posted signage.<br>|![way](img/way.png) [cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=3Me8bNEXV5Tkr3OhsLO6Ow'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/3Me8bNEXV5Tkr3OhsLO6Ow/thumb-1024.jpg'></a>|

<h3 id="Contraflow lane no separation">Highway - Contraflow lane no separation</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|On one-way streets, only a yellow line separates two-way bike traffic.<br>|![way](img/way.png) [cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=opposite_lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=JqwzEP2joZHOWy3jhxBMjw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/JqwzEP2joZHOWy3jhxBMjw/thumb-1024.jpg'></a>|

<h3 id="Contraflow lane with separation">Highway - Contraflow lane with separation</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|On one-way streets where there is a physical form of separation.,<br>|![way](img/way.png) [cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=opposite_lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=cW35TfHANRe5DWbbxABJlw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cW35TfHANRe5DWbbxABJlw/thumb-1024.jpg'></a>|

<h3 id="Advisory bike lane">Highway - Advisory bike lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Dashed lines delineate bike lanes on each side of the street,<br>and this functions like any other bike lane for cyclists.<br><br>The remaining roadway is too narrow for two-way motor traffic.<br>Motorists may enter the bike lanes when encountering an oncoming vehicle,<br>but must give priority to cyclists.<br>|![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=1<br>[cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=ok7p-w_Ej9nIG-S9eKK8pg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ok7p-w_Ej9nIG-S9eKK8pg/thumb-1024.jpg'></a>|

<h3 id="Shared bus/bike lane">Highway - Shared bus/bike lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Cyclists will often have these lanes to themselves,<br>but sometimes will need to navigate amidst buses.<br><br>Designated by signage.<br>|![way](img/way.png) [cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=[share_busway](http://wiki.openstreetmap.org/wiki/Tag:cycleway=share_busway)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=PqTQqISWgK5QbWg5PRvaQA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PqTQqISWgK5QbWg5PRvaQA/thumb-1024.jpg'></a>|

<h3 id="Shared sidewalk (signed)">Highway - Shared sidewalk (signed)</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|A standard sidewalk, sharing designated by signage.<br>Surface is often concrete, rather than asphalt.<br><br>Add the sidewalk tag to the highway=* way<br>|![way](img/way.png) sidewalk:both/left/right:bicycle=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=ZP4d2yqBwWWlfbixrztDzA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/ZP4d2yqBwWWlfbixrztDzA/thumb-1024.jpg'></a>|

<h3 id="Dooring zone">Highway - Dooring zone</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Unique in Ottawa. Painted warning that cyclists should<br>avoid riding close to parked vehicles.<br>|![way](img/way.png) tag like any other shared street with parking|<a href='https://www.mapillary.com/app/?focus=photo&pKey=kl9e_LG76Fvzom8PycQHAQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/kl9e_LG76Fvzom8PycQHAQ/thumb-1024.jpg'></a>|

<h3 id="Super sharrows">Highway - Super sharrows</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Green backgound for enhanced visibility.<br>Indicates lane position cyclists should use on roads<br>where no cycling infrastructure is present.<br>|![way](img/way.png) [sharrows](http://wiki.openstreetmap.org/wiki/Proposed_features/shared_lane)=left/right/both|<a href='https://www.mapillary.com/app/?focus=photo&pKey=Ai2jtWC-HyicF8V_NWbUcA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/Ai2jtWC-HyicF8V_NWbUcA/thumb-1024.jpg'></a>|

<h3 id="Sharrows">Highway - Sharrows</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Bike symbol indicates lane position cyclists should use on roads<br>where no cycling infrastructure is present.<br><br>Require frequent re-painting and may be very faded;<br>it's still of interest to know which roads are intended to have sharrows.<br>|![way](img/way.png) [sharrows](http://wiki.openstreetmap.org/wiki/Proposed_features/shared_lane)=left/right/both|<a href='https://www.mapillary.com/app/?focus=photo&pKey=d-l1qlsZsdb1vJWyeIVeDw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d-l1qlsZsdb1vJWyeIVeDw/thumb-1024.jpg'></a>|

<h3 id="Pocket bike lane">Highway - Pocket bike lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Painted lane positioned between a right-turn lane and a through lane.<br>Right turn lane length can be quite variable.<br><br>The cycleway:middle tag is an invention,<br>since there is no convention for this situation.<br>|![way](img/way.png) -cycleway:middle=lane|<a href='https://www.mapillary.com/app/?focus=photo&pKey=rjk1bxrfxsRKPZ8Ly9xsIw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/rjk1bxrfxsRKPZ8Ly9xsIw/thumb-1024.jpg'></a>|

<h3 id="Desire line">Highway - Desire line</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Well-worn path in a direct line between popular destinations. Also known as a goat path.<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)=[desire](http://wiki.openstreetmap.org/wiki/Tag:path=desire)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=dmlxBVFdp3OVrLvGr_VNgg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dmlxBVFdp3OVrLvGr_VNgg/thumb-1024.jpg'></a>|

<h3 id="Singletrack">Highway - Singletrack</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Recreational in purpose, may be meandering or direct. Most often maintained by users. Often includes technically challenging sections, but some sections may be appropriate for transportation<br>|![way](img/way.png) |<a href='https://www.mapillary.com/app/?focus=photo&pKey=dTX27I-QVA84jNZDhjcMiQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/dTX27I-QVA84jNZDhjcMiQ/thumb-1024.jpg'></a>|

<h3 id="Track road">Highway - Track road</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Also known as doubletrack. Typically direct, but surfaces are often too rough for comfortable cycling. Motor vehicles such as ATVs are often permitted, but track roads are typically not used by conventional cars. May not be maintained.<br>|![way](img/way.png) |<a href='https://www.mapillary.com/app/?focus=photo&pKey=cmoaqPU1XpZm1TM5U8gfQA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cmoaqPU1XpZm1TM5U8gfQA/thumb-1024.jpg'></a>|

<h3 id="Boardwalk">Highway - Boardwalk</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|May be recreational in purpose, but some sections are suitable for transportation<br>|![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[path](http://wiki.openstreetmap.org/wiki/Tag:highway=path)<br>[bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=[boardwalk](http://wiki.openstreetmap.org/wiki/Tag:bridge=boardwalk)<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=wood|<a href='https://www.mapillary.com/app/?focus=photo&pKey=pnKXylx9EkyyNmtjBHi_0g'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/pnKXylx9EkyyNmtjBHi_0g/thumb-1024.jpg'></a>|


<h2 id="Smoothness">Smoothness</h2>

<h3 id="Smoothness">Smoothness - Smoothness</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Read more on the wiki. Always a subjective call. Here are some more cycling-specific interpretations of the keys.<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\*||

<h3 id="Excellent">Smoothness - Excellent</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Fresh flawless pavement<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=excellent|<a href='https://www.mapillary.com/app/?focus=photo&pKey=76B0fQHwaSjke-HnuGsyAg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/76B0fQHwaSjke-HnuGsyAg/thumb-1024.jpg'></a>|

<h3 id="Good">Smoothness - Good</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Decent on skinny tires<br>- Asphalt with a few cracks and bumps<br>- Flawless stone dust<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=good|<a href='https://www.mapillary.com/app/?focus=photo&pKey=FsJWrwjgEQFsuQVthxZpBg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/FsJWrwjgEQFsuQVthxZpBg/thumb-1024.jpg'></a>|

<h3 id="Intermediate">Smoothness - Intermediate</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|A bike with sturdy tires and wheels would be preferred by most.<br>- Bumpy but not hazardous pavement.<br>- Stonedust with some minor washouts.<br>- Well-packed featureless dirt.<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=intermediate|<a href='https://www.mapillary.com/app/?focus=photo&pKey=sNcWLsTqRYidaDZyvdWCuw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/sNcWLsTqRYidaDZyvdWCuw/thumb-1024.jpg'></a>|

<h3 id="Bad">Smoothness - Bad</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|- Pavement with jarring bumps, alligatoring, or large cracks.<br>- Coarse gravel or stonedust with washouts that require alertness.<br>- Dirt trail with small stones or some small roots.<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=bad|<a href='https://www.mapillary.com/app/?focus=photo&pKey=tNEfnLaJW-CjOyoNocKxWA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/tNEfnLaJW-CjOyoNocKxWA/thumb-1024.jpg'></a>|

<h3 id="Very_bad">Smoothness - Very_bad</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|A mountain bike, perhaps with front suspension, is a more comfortable choice here.<br>This is the worst pavement condition that Ottawa is willing to just live with.<br><br>- Pavement with hazardous bumps and cracks large enough to swallow skinny wheels.<br>- Stonedust with hazardous washouts.<br>- Rocky surface, such as an ATV trail.<br>- Dirt trail where stones or roots require attention.<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=very_bad|<a href='https://www.mapillary.com/app/?focus=photo&pKey=E2XjzfnUuCTG_v2DQBLkLQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/E2XjzfnUuCTG_v2DQBLkLQ/thumb-1024.jpg'></a>|

<h3 id="Horrible">Smoothness - Horrible</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Dangerously broken pavement that should be fixed immediately; this is not a tag that will often apply to paved surfaces.<br>- Trails with large stones or roots that may require dismounting or suspension<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=horrible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=HBJPYj3unJmoxpAQoH9sfA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HBJPYj3unJmoxpAQoH9sfA/thumb-1024.jpg'></a>|

<h3 id="Very Horrible">Smoothness - Very Horrible</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Rough-edged stones, many exposed roots, suitable only for fatbikes or full suspension<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=very_horrible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=HsZQPUukTzivaSw1fiUemA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/HsZQPUukTzivaSw1fiUemA/thumb-1024.jpg'></a>|

<h3 id="Impassible">Smoothness - Impassible</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Almost nobody would be able to ride this<br>|![way](img/way.png) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=impassible|<a href='https://www.mapillary.com/app/?focus=photo&pKey=N3kAgXz5-4A5G8k3xIxCZQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/N3kAgXz5-4A5G8k3xIxCZQ/thumb-1024.jpg'></a>|


<h2 id="Signs">Signs</h2>

<h3 id="Share the road sign">Signs - Share the road sign</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Useful to tag as an advocacy target<br>|![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*||

<h3 id="Single file sign">Signs - Single file sign</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Useful to tag as an advocacy target<br>|![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*|<a href='https://www.mapillary.com/app/?focus=photo&pKey=PWtqLBKAwQl2mMlLj1K6oQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/PWtqLBKAwQl2mMlLj1K6oQ/thumb-1024.jpg'></a>|

<h3 id="Bike route sign">Signs - Bike route sign</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|May be useful as way-finding if they come with a bike route number, but many are just generic green signs<br>|![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*||

<h3 id="Walk your Bike">Signs - Walk your Bike</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|A permissive sign that indicates you may walk your bike. This sign does not make dismounting mandatory.Tagging them will be useful for indicating areas where there is insufficient space to share with pedestrians or where legal road crossing facilities have not been provided.<br>|![node](img/node.png) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign)=\*||


<h2 id="Lane Configuration">Lane Configuration</h2>

<h3 id="One Lane">Lane Configuration - One Lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Advisory bike lane streets where cars must use bike lane to pass by each other. Single-lane bridges.<br>|![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=2|<a href='https://www.mapillary.com/app/?focus=photo&pKey=NDFPt99h2cX8U71dvJbVpA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/NDFPt99h2cX8U71dvJbVpA/thumb-1024.jpg'></a>|

<h3 id="Two Lanes">Lane Configuration - Two Lanes</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Most residential streets consist of two lanes.<br>|![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=2|<a href='https://www.mapillary.com/app/?focus=photo&pKey=YYr05zv-VRKNB07lm1HA4g'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/YYr05zv-VRKNB07lm1HA4g/thumb-1024.jpg'></a>|

<h3 id="Multiple Lanes">Lane Configuration - Multiple Lanes</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Includes turning lanes<br>|![way](img/way.png) [lanes](https://wiki.openstreetmap.org/wiki/Key:lanes)=5||

<h3 id="Width">Lane Configuration - Width</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Most designated MUPs have a width of 3m, though some are wider. Walkways are typically 2m<br>|![way](img/way.png) [width](http://wiki.openstreetmap.org/wiki/Key:width)=\*||

<h3 id="Speed limit">Lane Configuration - Speed limit</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Only show if the speed is posted different than 50.<br>|![way](img/way.png) [maxspeed](https://wiki.openstreetmap.org/wiki/Key:maxspeed)=40||


<h2 id="Shoulder">Shoulder</h2>

<h3 id="Shoulder, not signed as a bike lane">Shoulder - Shoulder, not signed as a bike lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|A single line of paint delineates the shoulder.<br>No signage or bike symbols present.<br>Parking on the shoulder is typically permitted.<br>|![way](img/way.png) [shoulder:left/right/both](http://wiki.openstreetmap.org/wiki/Key:shoulder)<br>[shoulder:surface](https://wiki.openstreetmap.org/wiki/Key:surface)=yes/no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=wYO6exNSPsFQM7nZblFMAQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/wYO6exNSPsFQM7nZblFMAQ/thumb-1024.jpg'></a>|

<h3 id="Traffic-calming parking lane">Shoulder - Traffic-calming parking lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Resembles a bike lane or paved shoulder,<br>but is typically narrow and, unlike a paved shoulder,<br>includes a curb. Intended to visually narrow the road and calm traffic speeds.<br><br>Not specifically intended for cycling, but may be functional.<br>Parking is typically permitted.<br>|![way](img/way.png) -tag like any other shared road with/without parking|<a href='https://www.mapillary.com/app/?focus=photo&pKey=AFnTWKXGzqrIFqDCHRUOcg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/AFnTWKXGzqrIFqDCHRUOcg/thumb-1024.jpg'></a>|

<h3 id="Service strip">Shoulder - Service strip</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Asphalt strip, resembles a cycletrack,<br>but is typically narrow and in poor condition,<br>with no intersection treatments, and may include utility poles.<br>Intended as a low-maintenance surface for snow storage.<br>Also provide width and smoothness tags.<br>|![way](img/way.png) [shoulder](http://wiki.openstreetmap.org/wiki/Key:shoulder)=service_strip<br>[width](http://wiki.openstreetmap.org/wiki/Key:width)=\*<br>[smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness)=\*|<a href='https://www.mapillary.com/app/?focus=photo&pKey=s-IPpAUVbDsSPyDYNceg3Q'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/s-IPpAUVbDsSPyDYNceg3Q/thumb-1024.jpg'></a>|


<h2 id="Flooding">Flooding</h2>

<h3 id="Flood Prone">Flooding - Flood Prone</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Use `flood_prone=yes`<br>If the flooding is a predictable annual event,<br>you may wish to add conditional access restrictions to<br>indicate times of the year when the way should be avoided.<br>|![way](img/way.png) [access:conditional](http://wiki.openstreetmap.org/wiki/Conditional_restrictions)=no @ May 1-15||


<h2 id="Parking">Parking</h2>

It's possible to get into deep detail on street parking;
we are mainly concerned with whether it is present,
or saying definitively that it is absent.

<h3 id="Left">Parking - Left</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Parking, left side<br>|![way](img/way.png) [parking:lane:left](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=yes||

<h3 id="Right">Parking - Right</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Parking, right side<br>|![way](img/way.png) [parking:lane:right](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=yes||

<h3 id="Both">Parking - Both</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Parking, both side<br>|![way](img/way.png) [parking:lane](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=yes||

<h3 id="No Parking">Parking - No Parking</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|No Parking<br>|![way](img/way.png) [parking:lane](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=no_parking||

<h3 id="No Stopping">Parking - No Stopping</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|No Stopping<br>|![way](img/way.png) [parking:lane](http://wiki.openstreetmap.org/wiki/Key:parking:lane)=no_stopping||


<h2 id="Plowing">Plowing</h2>

<h3 id="Maintained">Plowing - Maintained</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|If maintained, `seasonal=no`<br>|![way](img/way.png) [seasonal](http://wiki.openstreetmap.org/wiki/Key:seasonal)=no||

<h3 id="Not maintained">Plowing - Not maintained</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|If not plowed, `seasonal=yes` and<br>add a conditional restriction of `access:conditional=no` @ Dec-Mar<br>to indicate the period when the way is typically unavailable<br>|![way](img/way.png) [seasonal](http://wiki.openstreetmap.org/wiki/Key:seasonal)=yes<br>[access:conditional](http://wiki.openstreetmap.org/wiki/Conditional_restrictions)=no||

<h3 id="Poorly maintained">Plowing - Poorly maintained</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|If poorly plowed, add a conditional restriction of `smoothness:conditional=bad` @ Dec-Mar<br>|![way](img/way.png) smoothness:conditional=bad||


<h2 id="Filtered Permeability and Pinch-Points">Filtered Permeability and Pinch-Points</h2>

<h3 id="Chicane without channel">Filtered Permeability and Pinch-Points - Chicane without channel</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ||

<h3 id="Chicane with channel">Filtered Permeability and Pinch-Points - Chicane with channel</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ||

<h3 id="P-Gate">Filtered Permeability and Pinch-Points - P-Gate</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[cycle_barrier](http://wiki.openstreetmap.org/wiki/Tag:barrier=cycle_barrier)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](http://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=MNN5neMyOijTJ_WlFlwLmg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/MNN5neMyOijTJ_WlFlwLmg/thumb-1024.jpg'></a>|

<h3 id="Block/Boulder/Planter">Filtered Permeability and Pinch-Points - Block/Boulder/Planter</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[block](https://wiki.openstreetmap.org/wiki/Tag:barrier=block)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](http://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=XpU-Zy9vjNcSsDooiZuXVA'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/XpU-Zy9vjNcSsDooiZuXVA/thumb-1024.jpg'></a>|

<h3 id="Bollard">Filtered Permeability and Pinch-Points - Bollard</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[bollard](https://wiki.openstreetmap.org/wiki/Tag:barrier=bollard)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes<br>[motor_vehicle](http://wiki.openstreetmap.org/wiki/Key:motor_vehicle)=no|<a href='https://www.mapillary.com/app/?focus=photo&pKey=4fpzcNTFK8MZNuiRlzlBxw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/4fpzcNTFK8MZNuiRlzlBxw/thumb-1024.jpg'></a>|

<h3 id="Split-path entrance">Filtered Permeability and Pinch-Points - Split-path entrance</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ||


<h2 id="Force Dismounts">Force Dismounts</h2>

<h3 id="Narrow Gate">Force Dismounts - Narrow Gate</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Very narrow gate (<90 cm gap)<br>|![node](img/node.png) [barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[cycle_barrier](http://wiki.openstreetmap.org/wiki/Tag:barrier=cycle_barrier)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes/dismount<br>[maxwidth](http://wiki.openstreetmap.org/wiki/Key:maxwidth)=0.5|<a href='https://www.mapillary.com/app/?focus=photo&pKey=Tp61o9WU2bmonMmhjUyR2w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/Tp61o9WU2bmonMmhjUyR2w/thumb-1024.jpg'></a>|

<h3 id="Swing Gate">Force Dismounts - Swing Gate</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Swing gate, can be opened and closed.<br>|![node](img/node.png) [barrier](http://wiki.openstreetmap.org/wiki/Key:barrier)=[swing_gate](https://wiki.openstreetmap.org/wiki/Tag:barrier=swing_gate)<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=yes/dismount|<a href='https://www.mapillary.com/app/?focus=photo&pKey=5IlTYiFdJUkGmn4pmqr4bg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/5IlTYiFdJUkGmn4pmqr4bg/thumb-1024.jpg'></a>|

<h3 id="Stairs with no trough">Force Dismounts - Stairs with no trough</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[steps](http://wiki.openstreetmap.org/wiki/Tag:highway=steps)<br>[ramp](http://wiki.openstreetmap.org/wiki/Key:ramp)=no<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=cPNFSreEy8iQ902_BJopyQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/cPNFSreEy8iQ902_BJopyQ/thumb-1024.jpg'></a>|

<h3 id="Stairs with trough">Force Dismounts - Stairs with trough</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [highway](http://wiki.openstreetmap.org/wiki/Key:highway)=[steps](http://wiki.openstreetmap.org/wiki/Tag:highway=steps)<br>[ramp](http://wiki.openstreetmap.org/wiki/Key:ramp)=yes<br>[ramp:bicycle](http://wiki.openstreetmap.org/wiki/Key:ramp:bicycle)=yes<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=a8BOwiuTq7Xe5mVZ_Bqf1Q'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/a8BOwiuTq7Xe5mVZ_Bqf1Q/thumb-1024.jpg'></a>|

<h3 id="Lock crossing">Force Dismounts - Lock crossing</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=yes<br>[surface](https://wiki.openstreetmap.org/wiki/Key:surface)=wood<br>[bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=4B2MTPSRKj6JUV6H_c0PVg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/4B2MTPSRKj6JUV6H_c0PVg/thumb-1024.jpg'></a>|

<h3 id="Curb cut needed">Force Dismounts - Curb cut needed</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [bicycle](http://wiki.openstreetmap.org/wiki/Key:bicycle)=[dismount](http://wiki.openstreetmap.org/wiki/Key:access)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=0iNKJr-wUKL0HQ_XYdFopw'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/0iNKJr-wUKL0HQ_XYdFopw/thumb-1024.jpg'></a>|


<h2 id="Intersections and other Road Crossings">Intersections and other Road Crossings</h2>

<h3 id="All-way stop">Intersections and other Road Crossings - All-way stop</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ||

<h3 id="Two-way stop">Intersections and other Road Crossings - Two-way stop</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ||

<h3 id="Pedestrian Crossover">Intersections and other Road Crossings - Pedestrian Crossover</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Also known as PXOs. These are mid-block crossings,<br>designated by a variety of different signage treatments.<br>They are not crosswalks, which are located at intersections.<br>Cyclists may use PXOs, but are required by law to walk their bike.<br>|![node](img/node.png) |<a href='https://www.mapillary.com/app/?focus=photo&pKey=BTxXRYVREFm3fy_NMQW5Yg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/BTxXRYVREFm3fy_NMQW5Yg/thumb-1024.jpg'></a>|

<h3 id="Yield">Intersections and other Road Crossings - Yield</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ||

<h3 id="Traffic circle, no bypass">Intersections and other Road Crossings - Traffic circle, no bypass</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ![way](img/way.png) ||

<h3 id="Traffic circle with bypass">Intersections and other Road Crossings - Traffic circle with bypass</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ![way](img/way.png) ||

<h3 id="Bicycle box">Intersections and other Road Crossings - Bicycle box</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|Also known as an advanced stop line (ASL).<br>ASL nodes are located before the actual junction node,<br>and are always connected to their junctions by the Way they're on.<br>|![node](img/node.png) [cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=[asl](http://wiki.openstreetmap.org/wiki/Tag:cycleway=asl)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=3A1jICZ8dyQ-5e3WAMZoog'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/3A1jICZ8dyQ-5e3WAMZoog/thumb-1024.jpg'></a>|

<h3 id="Jug handle">Intersections and other Road Crossings - Jug handle</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
|These are places for the cyclists to pull off to the right,<br>out of the stream of traffic, and await an opportunity to cross the road.<br>|![node](img/node.png) [cycleway](http://wiki.openstreetmap.org/wiki/Key:cycleway)=[asl](http://wiki.openstreetmap.org/wiki/Tag:cycleway=asl)|<a href='https://www.mapillary.com/app/?focus=photo&pKey=d_SH6OmRutjlPgR3B5u8_w'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d_SH6OmRutjlPgR3B5u8_w/thumb-1024.jpg'></a>|

<h3 id="Cyclist-only left turn lane">Intersections and other Road Crossings - Cyclist-only left turn lane</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ![way](img/way.png) ||

<h3 id="Cycleway crosses highway">Intersections and other Road Crossings - Cycleway crosses highway</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ![way](img/way.png) ||


<h2 id="Other tags for ways not shown">Other tags for ways not shown</h2>

<h3 id="Truck route">Other tags for ways not shown - Truck route</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [hgv](http://wiki.openstreetmap.org/wiki/Key:hgv)=yes||

<h3 id="Trucks prohibited">Other tags for ways not shown - Trucks prohibited</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [hgv](http://wiki.openstreetmap.org/wiki/Key:hgv)=no||

<h3 id="Bridge">Other tags for ways not shown - Bridge</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [bridge](https://wiki.openstreetmap.org/wiki/Key:bridge)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=DM_icM01W41ppwECsD0joQ'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/DM_icM01W41ppwECsD0joQ/thumb-1024.jpg'></a>|

<h3 id="Tunnel">Other tags for ways not shown - Tunnel</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [tunnel](http://wiki.openstreetmap.org/wiki/Key:tunnel)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=BABIQ-uSmxRTk4bkTbjCQg'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/BABIQ-uSmxRTk4bkTbjCQg/thumb-1024.jpg'></a>|

<h3 id="Lighting">Other tags for ways not shown - Lighting</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) [lit](http://wiki.openstreetmap.org/wiki/Key:lit)=yes|<a href='https://www.mapillary.com/app/?focus=photo&pKey=O7G6yB8eP6dBTNKg7Kmnww'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/O7G6yB8eP6dBTNKg7Kmnww/thumb-1024.jpg'></a>|

<h3 id="Operator">Other tags for ways not shown - Operator</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![operator](undefined) operator=NCC/City of Ottawa/Ville de Gatineau|<a href='https://www.mapillary.com/app/?focus=photo&pKey=d0oNvFSc0G-oWSPsxMwoog'><img style='min-width:300px;max-width:300px' src='https://d1cuyjsrcm0gby.cloudfront.net/d0oNvFSc0G-oWSPsxMwoog/thumb-1024.jpg'></a>|

<h3 id="Official name">Other tags for ways not shown - Official name</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![way](img/way.png) ![node](img/node.png) name=\*||


<h2 id="Points of Interest (Nodes)">Points of Interest (Nodes)</h2>

<h3 id="Bicycle Parking">Points of Interest (Nodes) - Bicycle Parking</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=bicycle_parking<br>[capacity](https://wiki.openstreetmap.org/wiki/Key:capacity)=N||

<h3 id="Drinking Water">Points of Interest (Nodes) - Drinking Water</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[drinking_water](https://wiki.openstreetmap.org/wiki/Tag:amenity=drinking_water)||

<h3 id="Bench">Points of Interest (Nodes) - Bench</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[bench](https://wiki.openstreetmap.org/wiki/Tag:amenity=bench)||

<h3 id="Waste Basket">Points of Interest (Nodes) - Waste Basket</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket)||

<h3 id="Waste Basket">Points of Interest (Nodes) - Waste Basket</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=[waste_basket](https://wiki.openstreetmap.org/wiki/Tag:amenity=waste_basket)||

<h3 id="Bicycle Repair Station">Points of Interest (Nodes) - Bicycle Repair Station</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity)=bicycle_repair_station||

<h3 id="Bicycle Share Station">Points of Interest (Nodes) - Bicycle Share Station</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) ||

<h3 id="Bicycle Counter">Points of Interest (Nodes) - Bicycle Counter</h3>

| Description         | OSM Schema          | Mapillary Photo     |
|---------------------|---------------------|---------------------|
||![node](img/node.png) [man_made](https://wiki.openstreetmap.org/wiki/Key:man_made)=[monitoring_station](http://wiki.openstreetmap.org/wiki/Key:monitoring:bicycle)<br>monitoring:bicycle=yes||


