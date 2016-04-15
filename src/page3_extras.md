---
title: Spec of the cat
screen: ./images/cat.jpg?highlight=[[342,124,142,184],[590,497,72,64],[1063,403,129,91]]
---

1. cute ear
2. small nose
3. fluffy paw pad

## Graphviz DOT Language

UI Spec MD takes Graphviz DOT Language as well

```dot
digraph G {

  subgraph cluster_0 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    a0 -> a1 -> a2 -> a3;
    label = "process #1";
  }

  subgraph cluster_1 {
    node [style=filled];
    b0 -> b1 -> b2 -> b3;
    label = "process #2";
    color=blue
  }
  start -> a0;
  start -> b0;
  a1 -> b3;
  b2 -> a3;
  a3 -> a0;
  a3 -> end;
  b3 -> end;

  start [shape=Mdiamond];
  end [shape=Msquare];
}
```
