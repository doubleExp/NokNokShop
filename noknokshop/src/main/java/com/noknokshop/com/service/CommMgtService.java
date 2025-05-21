package com.noknokshop.com.service;

import org.springframework.stereotype.Service;

import com.noknokshop.com.controller.vo.CommMgtInVo;
import com.noknokshop.com.controller.vo.CommMgtOutVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommMgtService {
	
	public CommMgtOutVo commInqList(CommMgtInVo inVo) {
		CommMgtOutVo outVo = new CommMgtOutVo();
		
		return	outVo;
	}
}
