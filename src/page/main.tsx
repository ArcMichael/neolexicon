import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import WithCustomLayout from '../layout/with-custom-layout';

type WordData = {
  word: string;
  exp: string;
  r?: number; // 半径，可以是可选的
  fill?: string; // 填充颜色，可以是可选的
};

const D3Page: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 600;
    const height = (width * 8) / 6;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const data: WordData[] = [
      { word: 'carte', exp: 'n. 地图；菜单；纸牌' },
      { word: 'a la carte', exp: 'adv. 照菜单点' },
      { word: 'menu', exp: 'n. 菜单' },
      { word: 'map', exp: 'n. 地图' },
      { word: 'atlas', exp: 'n. 地图集' },
    ];

    // 定义 10 个背景颜色
    const colors = [
      '#AEC6CF', // Light Blue
      '#98FB98', // Pale Green
      '#F5DEB3', // Wheat
      '#D3D3D3', // Light Grey
      '#87CEFA', // Light Sky Blue
      '#FFB347', // Apricot
      '#FF6961', // Pastel Red
      '#F49AC2', // Pastel Pink
      '#B39EB5', // Pastel Purple
      '#779ECB', // Cool Blue
    ];

    // 计算唯一值函数
    const calculateColorIndex = (word: string) => {
      const firstLetter = word.charAt(0).toLowerCase();
      const charCode = firstLetter.charCodeAt(0);
      return charCode % colors.length; // 使用字母的 ASCII 码对颜色数量取模
    };

    // 定义一个函数，根据单词长度计算半径
    const calculateRadius = (word: string) => {
      const minRadius = 15; // 最小半径
      const lengthFactor = 2; // 长度系数，用于放大效果
      return minRadius + word.length * lengthFactor;
    };

    data.forEach(d => {
      d.r = calculateRadius(d.word);
      const colorIndex = calculateColorIndex(d.word);
      d.fill = colors[colorIndex];
    });

    const xScale = d3
      .scalePoint<number>()
      .domain(data.map((_, i) => i))
      .range([50, width - 50])
      .padding(0.5);

    const nodes = svg
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (_, i) => `translate(${xScale(i)}, ${height / 2})`)
      .on('mouseover', function (event, d) {
        d3.select(this)
          .append('text')
          .attr('class', 'tooltip')
          .attr('x', 0)
          .attr('y', d.r! + 20)
          .attr('text-anchor', 'middle')
          .attr('fill', 'black')
          .text(d.exp);
      })
      .on('mouseout', function () {
        d3.select(this).select('.tooltip').remove();
      });

    nodes
      .append('circle')
      .attr('r', d => d.r!)
      .attr('fill', d => d.fill!);

    nodes
      .append('text')
      .attr('x', 0)
      .attr('y', 5)
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text(d => d.word);
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <h1>D3 Nodes with Dynamic Radius and Tooltip</h1>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WithCustomLayout(D3Page);
